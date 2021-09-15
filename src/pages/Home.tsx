import pizzolsGif from '../assets/pizzsols.gif';
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

			<div className="flex flex-wrap mx-auto justify-center">
				<div className="mx-4 my-3 bg-black img-container">
					<img src={pizzolsGif} alt="pizzsol example" />
				</div>
			</div>
		</div>
	);
}

export default Home;
