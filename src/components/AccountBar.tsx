import { shortenAddress } from '../candy-machine';

export interface AccountBarProps {
	balance: String;
	address: any;
}

const AccountBar = (props: AccountBarProps) => {
	return (
		<div className="w-full flex p-2 text-gray-100 absolute top-0 right-0 md:right-28 xxl:right-80 justify-end items-center">
			<div className="h-6 px-2 bg-gray-800 text-indigo-400">{props.balance} SOL</div>
			<div className="h-6 px-2 bg-gray-900 text-green-400">{shortenAddress(props.address)}</div>
		</div>
	);
};

export default AccountBar;
