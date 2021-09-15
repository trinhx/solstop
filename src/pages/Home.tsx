import pizzsolGifFast from '../assets/pizzsols_fast_2.gif';
import rarePizzSols from '../assets/rare_pizzsols.gif';

import { Links } from '../constants/Links';

function Home() {
	return (
		<div>
			<p className="w-10/12 max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed">
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
			</p>

			<div className="flex flex-wrap mx-auto justify-center">
				<span className="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded mb-10">Minting Soon!</span>
			</div>

			<div className="flex flex-row w-full bg-indigo-700 mx-auto p-10 justify-center h-1/3">
				<div className="flex flex-col p-12 w-1/4 h-96 text-left text-justify">
					<h1 className="text-3xl font-semibold leading-10 p-8">Ultra-Rare PizzSols:</h1>

					<p className="text-xl">
						The seven wonders of the metaverse. Find and own any of the seven Ultra-Rare PizzSols. Only 7 will ever be minted. Available with all your favourite toppings and emojis:
					</p>
					<p className="mt-8 leading-relaxed list-none text-xl">
						<li>- The New York</li>
						<li>- The Meat Lover</li>
						<li>- The Hawaain</li>
						<li>- The Marherita</li>
						<li>- The Supreme</li>
						<li>- The Vegetarian</li>
						<li>- The Mexicana</li>
					</p>
				</div>

				<div className="flex flex-col p-12 w-1/4">
					<div className="mx-4 my-3 img-container">
						<img src={rarePizzSols} alt="Ultra-Rare PizzSols!" />
					</div>
				</div>
			</div>

			{/* <div className="flex flex-wrap mx-auto justify-center"> */}
			{/*     <span className="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded mb-10"> */}
			{/*         Minting Soon! */}
			{/*     </span> */}
			{/* </div> */}
		</div>
	);
}

export default Home;
