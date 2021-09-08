function Faq() {
	return (
		<div className="max-w-3xl px-4 mx-auto sm:px-8">
			<h1 className="text-2xl mb-4">Frequently Asked Questions</h1>
			<h2 className="text-xl text-indigo-200 mt-2">What is an NFT?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">
				NFT stands for "non-fungible token." An NFT is basically data that is stored or accounted for in a digital ledger, and that data represents something specific. An NFT can, for example,
				represent a piece of art, a music album or other types of digital files.
			</p>

			<h2 className="text-xl text-indigo-200 mt-2">Where can I buy or sell PizzSol?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">We're currently listed on Solsea. </p>

			<h2 className="text-xl text-indigo-200 mt-2">Where can I view my PizzSol?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">We recommend Phantom wallet or Sollet. Click on the NFT tab in either wallet and you'll see your PizzSols!</p>

			<h2 className="text-xl text-indigo-200 mt-2">What can I do with my PizzSol NFT?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">You are free to do anything with your PizzSols under a non-exclusive license.</p>

			<h2 className="text-xl text-indigo-200 mt-2">How were the PizzSols generated?</h2>
			<p className="leading-relaxed mb-8 text-gray-400">
				All individual pieces of the PizzSol world have been created by hand and algorithmically generated using custom code. There are 165 attributes across 5 categories: These categories include
				background, pizza base, protein, cheese topping, sauce, vegetable. With these combined, it gives a total mathematical combination of thousands of unique PizzSols - but with only 10,000 being
				minted, some are more unique and rare than others.
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
