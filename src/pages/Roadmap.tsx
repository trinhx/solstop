import { Links } from '../constants/Links';
import ReactGA from 'react-ga';

function Team() {
	ReactGA.pageview(window.location.pathname);
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-8 mb-96">
			<div className="flex flex-wrap mx-auto justify-center">
				<div style={{ width: '512px' }} className="mx-4 mb-10 bg-black pb-8">
					<div className="p-4 font-dejavu text-sm sm:text-base">
						<h1 className="text-base sm:text-xl mb-4 text-center font-bold">ROADMAP</h1>

						<p style={{ color: 'lime' }}>September 26th 3pm UTC 2021:</p>
						<ul>
							<li>FIRST and ONLY 10,000 Pizzsols Released!</li>
						</ul>
						<br></br>
						<p style={{ color: 'lime' }}>October 2021:</p>
						<p className="mb-2">
							In search for PizzSol delivery drivers. Airdropping PizzSol drivers licences to holders with particular ingredients.
							<br />
							<br />
							Join our{' '}
							<a href={Links.DISCORD} target="_blank" rel="noreferrer" className="hover:text-indigo-700">
								Discord
							</a>{' '}
							for clues!
						</p>
						<br></br>
						<p style={{ color: 'lime' }}>November 2021:</p>
						<p>Seek out collaborations and partnerships with the wider NFT ecosystem</p>
						<br></br>
						<p style={{ color: 'lime' }}>December 2021:</p>
						<p>There will be an ultra rare PizzSol Special Sauce which Community driven and created.</p>
						<br></br>
						<p style={{ color: 'lime' }}>January 2022:</p>
						<p>Create your own PizzSol!</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
