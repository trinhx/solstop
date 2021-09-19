import pizzsolGifFast from '../assets/pizzsols_fast_2.gif';
import licences from '../assets/licences.gif';
import rarePizzSols from '../assets/rare_pizzsols.gif';
import ReactGA from 'react-ga';

import { Links } from '../constants/Links';

function Home() {
	ReactGA.pageview(window.location.pathname);
	return (
		<div>
			<div className="max-w-3xl mx-auto px-2 sm:px-4">
				<div className="block px-2 sm:p-4 mx-auto mt-4">
					<img src={pizzsolGifFast} alt="PizzSols!" />
				</div>

				<div className="block sm:p-4 mx-auto p-5">
					<h1 className="text-2xl font-medium text-left mt-5 mb-3">THE FIRST 10,000 ALGORITHMICALLY GENERATED PIZZA RECIPES ON SOLANA</h1>
					<span className="text-gray-300 leading-relaxed font-light text-lg p-5">
						The team here
						<a href={Links.TWITTER} target="_blank" rel="noreferrer" className="text-indigo-300 hover:text-indigo-500 font-bold">
							<span>{` @eatPizzSol `}</span>
						</a>
						love pizza we want to deliver pizzas into the metaverse the way you love them. PizzSols are NFTs with algorithmically generated pizza ingredients on the Solana blockchain. Images and Stats
						are intentionally ommited allowing others to interpret and use in anyway they want. Each PizzSol is comprised of a unique base, meats, vegetables, cheeses and sauces.
					</span>
				</div>

				<div className="block sm:p-4 mx-auto py-20 px-5">
					<h1 className="text-2xl font-medium text-left mt-5 mb-3">THIS IS MORE THAN JUST TEXT...</h1>
					<span className="text-gray-300 leading-relaxed font-light text-lg p-5 text-right">
						This is the beginning of a story. A story we craft together. PizzSols will form the base (no pun intended!), What else can we extrapoloate in to the metaverse from this? The possibiilities
						are endless. We aim to push the NFT space in a direction where narrators (NFT creators) mesh with artists to create a metaverse that unlocks human creativtity.
					</span>
				</div>

				<div className="block sm:p-4 mx-auto py-20 px-5">
					<h1 className="text-2xl font-medium text-left mt-5 mb-3">CREATORS TO CREATE PIZZAS THE WAY THEY WANT</h1>
					<span className="text-gray-300 leading-relaxed font-light text-lg p-5">
						The metaverse will be vast and every delivery is an adventure. We need to get these PizzSols out, and it won't be easy. Expert drivers will be required to operate class A, B, C, D
						vehicles.
					</span>
				</div>

				<div className="block sm:p-4 mx-auto bg-gray-700 p-5 mt-5 mb-20">
					<h1 className="text-2xl text-right font-medium mt-5 p-5">... SO WE NEED YOUR HELP</h1>
					<span className="text-gray-300 leading-relaxed font-light text-lg mt-3">
						We're looking for drivers with selected PizzSols and who believe and understand our vision of the NFT space. Owners of PizzSols with specific attributes will be airdropped an official
						PizzSol drivers licence. Make sure you join our discord for clues.
					</span>

					<div className="block px-2 sm:p-4 mx-auto mt-8">
						<img src={licences} alt="PizzSols!" />
					</div>
				</div>
			</div>

			<div className="bg-indigo-800 leading-relaxed mb-24">
				<div className="flex justify-center max-w-6xl mx-auto py-20 space-x-4 pb-36 px-2 sm:px-4">
					<div className="w-full sm:w-6/12">
						<h2 className="text-3xl font-semibold mb-4">Ultra-Rare PizzSols:</h2>
						<p className="text-xl">
							The seven wonders of the metaverse. Find and own any of the seven Ultra-Rare PizzSols. Only 7 will ever be minted. Available with all your favourite toppings and emojis:
						</p>
						<ul className="mt-8 text-xl">
							<li>- The New York</li>
							<li>- The Meat Lover</li>
							<li>- The Hawaiian</li>
							<li>- The Margherita</li>
							<li>- The Supreme</li>
							<li>- The Vegetarian</li>
							<li>- The Mexicana</li>
						</ul>
						<div className="block sm:hidden px-2 mt-4 sm:p-4 mx-auto">
							<img src={rarePizzSols} alt="Ultra-Rare PizzSols!" />
						</div>
					</div>

					<div className="hidden sm:block sm:w-6/12">
						<img src={rarePizzSols} alt="Ultra-Rare PizzSols!" />
					</div>
				</div>
			</div>
			<div className="flex flex-wrap mx-auto justify-center">
				<span className="bg-indigo-500 hover:bg-indigo-700 hover:cursor-pointer text-white text-center py-2 px-4 rounded mt-8 mb-16">Minting Soon!</span>
			</div>
		</div>
	);
}

export default Home;
