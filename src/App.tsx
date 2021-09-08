import './App.css';
import { useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Minter from './components/Minter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Team from './pages/Team';

import * as anchor from '@project-serum/anchor';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { getPhantomWallet, getSolflareWallet, getSolletWallet } from '@solana/wallet-adapter-wallets';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import Attributes from './pages/Attributes';

const treasury = new anchor.web3.PublicKey(process.env.REACT_APP_TREASURY_ADDRESS!);

const config = new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_CONFIG!);

const candyMachineId = new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
	const endpoint = useMemo(() => clusterApiUrl(network), []);

	const wallets = useMemo(() => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()], []);

	return (
		<HelmetProvider>
			<ConnectionProvider endpoint={endpoint}>
				<WalletProvider wallets={wallets} autoConnect>
					<WalletDialogProvider>
						<Helmet>
							<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
							<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
							<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
							<link rel="manifest" href="/site.webmanifest" />
							<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
							<meta name="msapplication-TileColor" content="#da532c" />
							<meta name="theme-color" content="#ffffff" />
						</Helmet>
						<div id="page-container">
							<div id="content-wrap">
								<Navbar />
								<Minter candyMachineId={candyMachineId} config={config} connection={connection} startDate={startDateSeed} treasury={treasury} txTimeout={txTimeout} />
								<Switch>
									<Route exact path="/">
										<Home />
									</Route>
									<Route exact path="/attributes">
										<Attributes />
									</Route>
									<Route exact path="/faq">
										<Faq />
									</Route>
									<Route exact path="/team">
										<Team />
									</Route>
									<Route exact path="/terms">
										<Terms />
									</Route>
								</Switch>
							</div>
							<Footer />
						</div>
					</WalletDialogProvider>
				</WalletProvider>
			</ConnectionProvider>
		</HelmetProvider>
	);
};

export default App;
