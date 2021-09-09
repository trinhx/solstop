function Faq() {
	return (
		<div className="max-w-3xl px-4 mx-auto sm:px-8">
			<h1 className="text-2xl mb-4">Frequently Asked Questions</h1>
			<h2 className="text-xl text-indigo-200 mt-2">What is an NFT?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">
                An NFT is a  "non-fungible token." An NFT is data that is stored or accounted for in a digital ledger, and that data represents something specific. An NFT can, for example, represent a piece of art, a music album or other types of digital files.
			</p>

			<h2 className="text-xl text-indigo-200 mt-2">Where can I buy or sell PizzSol?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">
                We are currently awaiting verification confirmation from DigitalEyes, Solanart and Solsea.
            </p>

			<h2 className="text-xl text-indigo-200 mt-2">Where can I view my PizzSol?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">
                Phantom wallet can be used to view your NFT. You can also connect most other Solana wallets to step.finance to view your NFT.
            </p>

			<h2 className="text-xl text-indigo-200 mt-2">
                You are free to do anything with your PizzSols under a non-exclusive license.
            </h2>
			<p className="leading-relaxed mb-8 text-gray-400">You are free to do anything with your PizzSols under a non-exclusive license.</p>

			<h2 className="text-xl text-indigo-200 mt-2">How were the PizzSols generated?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">
                A PizzSol is algorithmically generated using a custom code. There are 54 attributes across 5 categories: These categories include pizza bases, meat toppings, vegetable toppings, a variety of cheeses and sauces. With these combined, it gives a total mathematical combination of nearly 100,000 unique PizzSols - but with only 10,000 being minted, some are more unique and rare than others; in particular the very rare PizzSol sauce topping.
			</p>

			<h2 className="text-xl text-indigo-200 mt-2">Get in touch with us</h2>

			<p className="leading-relaxed text-gray-400">
				Feel free to get in touch with us on
				<a href="https://twitter.com/eatpizzsol" rel="noreferrer" target="_blank" className="hover:text-white text-blue-400  flex items-center gap-1">
					<span>Twitter: @eatpizzsol</span>
				</a>
				<a href="https://discord.gg/mD4G5zzyyc" rel="noreferrer" target="_blank" className="hover:text-white text-blue-400  flex items-center gap-1">
					<span>discord: https://discord.gg/mD4G5zzyyc</span>
				</a>
			</p>
		</div>
	);
}

export default Faq;
