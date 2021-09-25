import { Links } from '../constants/Links';
import ReactGA from 'react-ga';

function Faq() {
	ReactGA.pageview(window.location.pathname);
	return (
		<div className="max-w-3xl px-4 mx-auto sm:px-8">
			<h1 className="text-2xl mb-4">Frequently Asked Questions</h1>
			<h2 className="text-xl text-indigo-200 mt-2">What is an NFT?</h2>
			<p className="leading-relaxed mb-8 text-gray-300">
				An NFT is a "non-fungible token." An NFT is data that is stored or accounted for in a digital ledger, and that data represents something specific. An NFT can, for example, represent a piece of
				art, a music album or other types of digital files.
			</p>

			<h2 className="text-xl text-indigo-200 mt-2">Where can I buy or sell PizzSol?</h2>
			<p className="leading-relaxed mb-8 text-gray-300">We are listed on
				<a href={Links.DIGITAL_EYES} target="_blank" rel="noreferrer" className="hover:text-blue-100 text-blue-400">
					<span>{` `}DigitalEyes.{` `}</span>
				</a>
                We are currently awaiting verification confirmation from Solanart and Solsea.
            </p>

			<h2 className="text-xl text-indigo-200 mt-2">Where can I view my PizzSol?</h2>
			<p className="leading-relaxed mb-8 text-gray-300">
				<a href={Links.PHANTOM_WALLET} target="_blank" rel="noreferrer" className="hover:text-blue-100 text-blue-400">
					<span>Phantom wallet{` `}</span>
				</a>
				can be used to view your NFT. You can also connect most other Solana wallets to
				<a href={Links.STEP_FINANCE} target="_blank" rel="noreferrer" className="hover:text-blue-100 text-blue-400">
					<span>
						{` `}step.finance {` `}
					</span>
				</a>
				to view your NFT.
			</p>

			<h2 className="text-xl text-indigo-200 mt-2">What can I do with my PizzSol NFT?</h2>
			<div className="leading-relaxed mb-8 text-gray-300">
				You are free to do anything with your PizzSols. The possibilities are endless.
				<br></br>
				Examples:
				<ul>
					<li>Incorporate Pizzsols in your NFT games as food items</li>
					<li>Create derivative art based on Pizzsol Ingredients</li>
				</ul>
			</div>

			<h2 className="text-xl text-indigo-200 mt-2">How were the PizzSols generated?</h2>
			<p className="leading-relaxed mb-8 text-gray-300">
				A PizzSol is algorithmically generated using custom code. There are 54 attributes across 5 categories: These categories include pizza bases, meat toppings, vegetable toppings, a variety of
				cheeses and sauces. With these combined, it gives a total mathematical combination of nearly 100,000 unique PizzSols - but with only 10,000 being minted, some are more unique and rare than
				others; in particular the very rare PizzSol sauce topping.
			</p>

			<h2 className="text-xl text-indigo-200 mt-2">Get in touch with us</h2>

			<p className="leading-relaxed text-gray-300">
				Feel free to get in touch with us on
				<a href={Links.TWITTER} rel="noreferrer" target="_blank" className="hover:text-white text-blue-400  flex items-center gap-1">
					<span>Twitter: @eatpizzsol</span>
				</a>
				<a href={Links.DISCORD} rel="noreferrer" target="_blank" className="hover:text-white text-blue-400  flex items-center gap-1">
					<span>discord: https://discord.gg/mD4G5zzyyc</span>
				</a>
			</p>
		</div>
	);
}

export default Faq;
