// import pizzsolGifFast from '../assets/pizzsols_fast_2.gif';
import rarePizzSols from '../assets/rare_pizzsols.gif';

import { Links } from '../constants/Links';

function Home() {
	return (
		<div>
			<div className="max-w-3xl mx-auto px-2 sm:px-4">
				<div className="text-gray-300 leading-relaxed">
					The team here
					<a href={Links.TWITTER} target="_blank" rel="noreferrer" className="hover:text-indigo-700">
						<span>{` @eatPizzSol `}</span>
					</a>
					love pizza. We want to ensure your favourite recipes exist on the blockchain forever.
					<h1 className="text-2xl font-semibold text-center mt-10 mb-10">Pizzsols will bridge human senses to the metaverse via the world's universal food... Pizza!</h1>
					PizzSol is randomly generated pizza ingredients on the Solana blockchain. Images and Stats are intentionally ommited allowing others to interpret and use in anyway they want. Each PizzSol is
					comprised of a unique base, meats, vegetables, cheeses and sauces. For more information on our roadmap, FAQ etc, join our
					<a href={Links.DISCORD} target="_blank" rel="noreferrer" className="hover:text-gray-100">
						<span>{` Discord!`}</span>
					</a>
					<br />
				</div>

				<div className="flex flex-wrap mx-auto justify-center">
					<span className="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded mt-8 mb-16">Minting Soon!</span>
				</div>
			</div>

			<div className="bg-indigo-800 leading-relaxed w-full mb-24">
				<div className="flex justify-center max-w-5xl mx-auto py-20 space-x-4 pb-36 px-2 sm:px-4">
					<div className="w-full sm:w-6/12">
						<h2 className="text-3xl font-semibold mb-4">Ultra-Rare PizzSols:</h2>
						<p className="text-xl">
							The seven wonders of the metaverse. Find and own any of the seven Ultra-Rare PizzSols. Only 7 will ever be minted. Available with all your favourite toppings and emojis:
						</p>
						<ul className="mt-8 text-xl">
							<li>- The New York</li>
							<li>- The Meat Lover</li>
							<li>- The Hawaiian</li>
							<li>- The Marherita</li>
							<li>- The Supreme</li>
							<li>- The Vegetarian</li>
							<li>- The Mexicana</li>
						</ul>
						<div className="block sm:hidden px-2 sm:p-4 mx-auto mt-8">
							<img src={rarePizzSols} alt="Ultra-Rare PizzSols!" />
						</div>
					</div>

					<div className="hidden sm:block sm:w-6/12">
						<img src={rarePizzSols} alt="Ultra-Rare PizzSols!" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
