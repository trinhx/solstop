import pizzsolGifFast from '../assets/pizzsols_fast_2.gif';
import rarePizzSols from '../assets/rare_pizzsols.gif';

import { Links } from '../constants/Links';

function Home() {
	return (
		<div>
            <div className="flex flex-row-reverse w-full mx-auto p-10 mt-10 justify-center h-screen">
                <div className="flex flex-col w-1/4 p-5">
                        <img src={pizzsolGifFast} alt="PizzSols!" />
                </div>

                <div className="flex flex-col w-1/4 p-5 text-3xl mt-20 align-center leading-relaxed">
                    The team here
                <a href={Links.TWITTER} target="_blank" rel="noreferrer" className="hover:text-indigo-700">
                     <span>{` @eatPizzSol `}</span>
                </a>
                    love pizza and we want to bring pizzas into metaverse the way you love them.
                </div>

            </div>

			<div className="flex flex-row w-10/12 max-w-3xl bg-gray-800 mx-auto p-10 justify-center h-screen items-center">
                <div className="flex flex-col p-12 h-96 justify-center text-center">
                    <h1 className="text-4xl font-semibold">
                        PizzSols are NFTs with algorithmically generated pizza ingredients on the Solana blockchain. Images and Stats
                        are intentionally ommited allowing others to interpret and use in anyway they want. Each PizzSol is
                        comprised of a unique base, meats, vegetables, cheeses and sauces.
                    </h1>
                </div>
            </div>

			<p className="flex flex-row w-10/12 max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed text-3xl text-right h-100">
			</p>

			<div className="flex flex-row w-10/12 max-w-3xl bg-gray-800 mx-auto p-10 justify-center h-screen items-center">
                <div className="flex flex-col p-12 h-96 justify-center text-center">
                    <h1 className="text-4xl font-semibold">
                        Pizzsols will bridge human senses to the metaverse via the world's universal food...
                        Pizza.
                    </h1>
                </div>
            </div>

			<div className="flex flex-row w-10/12 max-w-3xl bg-indigo-800 mx-auto p-10 justify-center h-1/3 items-center">
                <div className="flex flex-col p-12 h-96 justify-center text-center">
                    <h1 className="text-4xl font-semibold">
                        But.. Delivering PizzSols across the metaverse is hard work and we need your help. We have vacant
                        positions for PizzSol delivery drivers.
                    </h1>
                </div>
            </div>

			<div className="flex flex-row w-10/12 max-w-3xl bg-gray-800 mx-auto p-10 justify-center h-1/3 items-center">
                <div className="flex flex-col p-12 h-96 justify-center text-center">
                    <h1 className="text-4xl font-semibold">
                        The FIRST 500 PizzSols sold will be airdropped everything needed to help deliver PizzSols across
                        the metaverse.
                    </h1>
                </div>
            </div>

            <div className="flex flex-row w-full bg-indigo-700 mx-auto p-10 justify-center h-1/3">
                <div className="flex flex-col p-12 w-1/4 h-96 text-left text-justify">
                    <h1 className="text-3xl font-semibold leading-10 p-8">
                        Ultra-Rare PizzSols:
                    </h1>

                    <p className="text-xl">
                        The seven wonders of the metaverse. Find and own any of the seven Ultra-Rare PizzSols.
                        Only 7 will ever be minted. Available with all your favourite toppings and emojis:
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
