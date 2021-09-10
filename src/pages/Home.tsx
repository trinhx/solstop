import pizzolsGif from '../assets/pizzsols.gif';
import { Links } from '../constants/Links';

function Home() {
	return (
		<div>
			<p className=" w-10/12 max-w-3xl mx-auto mb-10 text-center text-gray-300 leading-relaxed">
				PizzSol is randomly generated pizza ingredients on the Solana blockchain. Images and Stats are intentionally ommited allowing others to interpret and use in anyway they want. Each PizzSol is
				comprised of a unique base, meats, vegetables, cheeses and sauces. For more information on our roadmap, FAQ etc, join our
				<a href={Links.DISCORD} target="_blank" rel="noreferrer" className="hover:text-gray-100">
					<span>{` Discord!`}</span>
				</a>
			</p>

			<p className="text-center text-gray-300">Example Pizzsols:</p>
			<div className="flex flex-wrap mx-auto justify-center">
				<div className="mx-4 my-6 bg-black overflow-hidden img-container">
					<img src={pizzolsGif} alt="pizzsol example" />
				</div>
			</div>
		</div>
	);
}

export default Home;
