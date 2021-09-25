import { Links } from '../constants/Links';
// import ReactGA from 'react-ga';

function Team() {
	// ReactGA.pageview(window.location.pathname);
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-8 mb-96">
			<div className="flex flex-wrap mx-auto justify-center">
				<div style={{ width: '512px' }} className="mx-4 mb-10 bg-black pb-8">
					<div className="p-4 font-dejavu text-sm sm:text-base">
						<h1 className="text-base sm:text-xl mb-4 text-center font-bold">ROADMAP</h1>

						<p style={{ color: 'lime' }}>September 26th 3pm UTC 2021:</p>
						<ul>
							<li>FIRST and ONLY 10,000 Pizzsols Released!</li>
							<li>All unique combinations of your favourite Pizza recipes.</li>
							<li>Only 7 Ultra-Rare PizzSols with an emoji.</li>
						</ul>
					</div>
				</div>

				<div style={{ width: '512px' }} className="mx-4 mb-10 bg-black pb-8">
					<div className="p-4 font-dejavu text-sm sm:text-base">
						<p style={{ color: 'lime' }}>October 2021:</p>
						<p className="mb-2">
							The search for PizzSol delivery drivers begins. We want to airdrop special licences to holders with particular ingredients to become our future drivers.
							<br />
							<br />
							Join our{' '}
							<a href={Links.DISCORD} target="_blank" rel="noreferrer" className="hover:text-indigo-700">
								Discord
							</a>{' '}
							for clues!
						</p>
					</div>
				</div>

				<div style={{ width: '512px' }} className="mx-4 mb-10 bg-black pb-8">
					<div className="p-4 font-dejavu text-sm sm:text-base">
						<p style={{ color: 'lime' }}>November 2021:</p>
						<p>We want everyone to try a slice of PizzSol.</p>
						<p>Seek out collaborations and partnerships with the wider NFT ecosystem.</p>
						<br />
						<p>Prototyping of PizzSols incorporated into some popular games.</p>
						<br />
						<p>Engage with effective charities</p>
					</div>
				</div>

				<div style={{ width: '512px' }} className="mx-4 mb-10 bg-black pb-8">
					<div className="p-4 font-dejavu text-sm sm:text-base">
						<p style={{ color: 'lime' }}>December 2021:</p>
						<p>One of the biggest secrets of all. Clues will be dropped about this special recipe.</p>
						<br />
						<p>There will be an ultra rare PizzSol Special Sauce which Community driven and created.</p>
					</div>
				</div>

				<div style={{ width: '512px' }} className="mx-4 mb-10 bg-black pb-8">
					<div className="p-4 font-dejavu text-sm sm:text-base">
						<p style={{ color: 'lime' }}>January 2022:</p>
						<p>Create and mint your own PizzSol!</p>
						<br />
						<p>Merge your personal PizzSol into game</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
