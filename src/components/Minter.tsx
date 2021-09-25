import { useEffect, useState } from 'react';
import { Button, CircularProgress, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import * as anchor from '@project-serum/anchor';

import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';

import { CandyMachine, awaitTransactionSignatureConfirmation, getCandyMachineState, mintOneToken } from '../candy-machine';

import AccountBar from './AccountBar';

export interface MinterProps {
	candyMachineId: anchor.web3.PublicKey;
	config: anchor.web3.PublicKey;
	connection: anchor.web3.Connection;
	startDate: number;
	treasury: anchor.web3.PublicKey;
	txTimeout: number;
	isDev: boolean;
}

const Minter = (props: MinterProps) => {
	const [balance, setBalance] = useState<number>();
	const [isActive, setIsActive] = useState(false); // true when countdown completes
	const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
	const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

	const [alertState, setAlertState] = useState<AlertState>({
		open: false,
		message: '',
		severity: undefined,
	});

	const [startDate, setStartDate] = useState(new Date(props.startDate));
	const [mintPrice, setMintPrice] = useState(0);

	const wallet = useWallet();
	const [candyMachine, setCandyMachine] = useState<CandyMachine>();

	const onMint = async () => {
		try {
			setIsMinting(true);
			if (wallet.connected && candyMachine?.program && wallet.publicKey) {
				const mintTxId = await mintOneToken(candyMachine, props.config, wallet.publicKey, props.treasury);

				const status = await awaitTransactionSignatureConfirmation(mintTxId, props.txTimeout, props.connection, 'singleGossip', false);

				if (!status?.err) {
					setAlertState({
						open: true,
						message: 'Congratulations! Mint succeeded!',
						severity: 'success',
					});
				} else {
					setAlertState({
						open: true,
						message: 'Mint failed! Please try again!',
						severity: 'error',
					});
				}
			}
		} catch (error: any) {
			// TODO: blech:
			let message = error.msg || 'Minting failed! Please try again!';
			if (!error.msg) {
				if (error.message.indexOf('0x138')) {
				} else if (error.message.indexOf('0x137')) {
					message = `SOLD OUT!`;
				} else if (error.message.indexOf('0x135')) {
					message = `Insufficient funds to mint. Please fund your wallet.`;
				}
			} else {
				if (error.code === 311) {
					message = `SOLD OUT!`;
					setIsSoldOut(true);
				} else if (error.code === 312) {
					message = `Minting period hasn't started yet.`;
				}
			}

			setAlertState({
				open: true,
				message,
				severity: 'error',
			});
		} finally {
			if (wallet?.publicKey) {
				const balance = await props.connection.getBalance(wallet?.publicKey);
				setBalance(balance / LAMPORTS_PER_SOL);
			}
			setIsMinting(false);
		}
	};

	useEffect(() => {
		const difference = +new Date(props.startDate * 1000) - +new Date();
		setIsActive(difference < 0);
	}, [props.startDate, wallet]);

	useEffect(() => {
		(async () => {
			if (wallet?.publicKey) {
				const balance = await props.connection.getBalance(wallet.publicKey);
				setBalance(balance / LAMPORTS_PER_SOL);
			}
		})();
	}, [wallet, props.connection]);

	useEffect(() => {
		(async () => {
			if (!wallet || !wallet.publicKey || !wallet.signAllTransactions || !wallet.signTransaction) {
				return;
			}

			const anchorWallet = {
				publicKey: wallet.publicKey,
				signAllTransactions: wallet.signAllTransactions,
				signTransaction: wallet.signTransaction,
			} as anchor.Wallet;

			const { candyMachine, goLiveDate, itemsRemaining, mintPrice } = await getCandyMachineState(anchorWallet, props.candyMachineId, props.connection);

			setIsSoldOut(itemsRemaining === 0);
			setStartDate(goLiveDate);
			setCandyMachine(candyMachine);
			setMintPrice(mintPrice);
		})();
	}, [wallet, props.candyMachineId, props.connection]);

	return (
		<div className={props.isDev ? 'h-32' : 'h-24'}>
			{wallet.connected && <AccountBar address={wallet.publicKey?.toBase58() || ''} balance={(balance || 0).toLocaleString()} />}
			<div className="mx-auto w-full mb-10 text-center">
				<div className="block">
					{!wallet.connected ? (
						<>
							<WalletDialogButton>Connect Wallet</WalletDialogButton>
							{console.log(props.startDate)}
							<p className="uppercase pt-2">{!isActive && <Counter startDate={props.startDate} />}</p>
						</>
					) : (
						<>
							{/* isActive isMinting */}
							{isSoldOut && <span className="px-4 py-2 bg-blue-600 text-gray-100">ALL PIZZSOLS SOLD OUT!</span>}
							{!isSoldOut && (
								<Button disabled={isMinting || !isActive} variant="contained" color="primary" onClick={onMint}>
									{isActive && isMinting && <CircularProgress />}
									{isActive && !isMinting && <span className="text-gray-100">MINT A PIZZSOL!</span>}
									{!isActive && <Counter startDate={props.startDate} />}
								</Button>
							)}
						</>
					)}
				</div>
				<p className="text-gray-500">0.5 SOL to Mint a Pizzsol</p>
				{props.isDev && (
					<>
						<p>
							<span className="px-2">Is active: {`${isActive}`}</span>
							<span className="px-2">Is minting: {`${isMinting}`}</span>
							<span className="px-2">Is soldout: {`${isSoldOut}`}</span>
							<span className="px-2">mint Price: {`${mintPrice / LAMPORTS_PER_SOL}`} sol</span>
						</p>
						<span className="px-2">Launch Date: {`${startDate}`}</span>
					</>
				)}
			</div>
			<Snackbar open={alertState.open} autoHideDuration={6000} onClose={() => setAlertState({ ...alertState, open: false })}>
				<Alert onClose={() => setAlertState({ ...alertState, open: false })} severity={alertState.severity}>
					{alertState.message}
				</Alert>
			</Snackbar>
		</div>
	);
};

interface AlertState {
	open: boolean;
	message: string;
	severity: 'success' | 'info' | 'warning' | 'error' | undefined;
}

interface CounterProps {
	startDate: number;
}

const calculateTimeLeft = (_date: number) => {
	const difference = +new Date(_date * 1000) - +new Date();
	let timeLeft: any = {};

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}

	return timeLeft;
};

const Counter = (props: CounterProps) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.startDate));

	useEffect(() => {
		let timer1 = setTimeout(() => setTimeLeft(calculateTimeLeft(props.startDate)), 1000);

		return () => {
			clearTimeout(timer1);
		};
	});

	if (!timeLeft.minutes && !timeLeft.seconds) {
		return null;
	}

	return (
		<span className="px-4 py-2">
			Opens in {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
		</span>
	);
};

export default Minter;
