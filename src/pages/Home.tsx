import pizzsolGifFast from '../assets/pizzsols_fast_2.gif';
import licences from '../assets/licences.gif';
import SolStopsGif from '../assets/solstops.gif';
import LocationIcon from '../assets/locationicon.png';
import HeartIcon from '../assets/hearticon.png';
import BusIcon from '../assets/busicon.png';
import SolStop6 from '../assets/solstop6.gif';


// import ReactGA from 'react-ga';

import { Links } from '../constants/Links';

function Home() {
    // ReactGA.pageview(window.location.pathname);
    return (
        <div>
            <img className="block mb-4 mx-auto" src={SolStopsGif} alt="SolStops"/>

            <div className="text-gray-900 max-w-6xl mx-auto px-2 sm:px-4">
                <div className="block sm:p-4 mx-auto p-5">
                    <h1 className="text-3xl font-prompt text-left mt-5 mb-3">Beautiful Bus Stops</h1>
                    <span className="leading-relaxed font-light text-lg p-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        <a href={Links.TWITTER} target="_blank" rel="noreferrer" className="text-indigo-300 hover:text-indigo-500 font-bold">
                            <span>{` @SolStops `}</span>
                        </a>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </span>
                </div>
            </div>

            <div className="text-gray-900 max-w-6xl mx-auto px-2 sm:px-4 my-10 text-2xl">
                <div className="block sm:p-4 mx-auto p-5 text-center">

                    <div className="mx-auto h-44">
                        <img className="block mb-4 mx-auto w-20 h-20" src={LocationIcon} alt="Location Icon"/>
                        Something goes here for a location icon
                    </div>

                    <div className="mx-auto h-44">
                        <img className="block mb-4 mx-auto w-20 h-20" src={HeartIcon} alt="Heart Icon"/>
                        We can choose to donate to charity but rather not
                    </div>

                    <div className="mx-auto h-44">
                        <img className="block mb-4 mx-auto w-20 h-20" src={BusIcon} alt="BusIcon"/>
                        Look at all those SolStops!
                    </div>

                </div>
            </div>

            <div className="text-gray-900 max-w-6xl mx-auto px-2 sm:px-4">
                <div className="block sm:p-4 mx-auto p-5">
                    <h1 className="text-3xl font-prompt text-right mt-5 mb-3">These are meaningless NFT's...</h1>
                    <span className="leading-relaxed font-light text-lg p-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </span>
                </div>
            </div>

            <div className="text-gray-900 max-w-6xl mx-auto px-2 sm:px-4">
                <div className="block sm:p-4 mx-auto p-5">
                    <h1 className="text-3xl font-prompt text-left mt-10">FAQ</h1>
                    <span className="leading-relaxed font-light text-lg">
                        <h1 className="text-xl font-bold py-3">When is mint date?</h1>
                        September 29th, 2021 at 6PM CT.
                    </span>

                    <span className="leading-relaxed font-light text-lg p-5">
                        <h1 className="text-xl font-bold py-3 mt-4">How can I mint a SolStop?</h1>
                        On our website (solsteads.com), at release time you can use a Solana wallet to buy a home. We recommend Phantom wallet.
                    </span>

                    <span className="leading-relaxed font-light text-lg p-5">
                        <h1 className="text-xl font-bold py-3 mt-4">What is the price of a SolStop?</h1>
                        0.25 SOL. Housing should be affordable. Both physical and digital.
                    </span>

                    <span className="leading-relaxed font-light text-lg p-5">
                        <h1 className="text-xl font-bold py-3 mt-4">How does the “address” work?</h1>
                        The metadata on each Solstead will include a unique street address (a number and street name). Solstead.com will have a directory of all Solsteads, with a shareable page for each one (e.g. solsteads.com/123-main-street) to show off your home and all the NFTs that live in the same wallet.
                    </span>

                    <span className="leading-relaxed font-light text-lg p-5">
                        <h1 className="text-xl font-bold py-3 mt-4">What exactly am I buying when I buy a Solstead NFT?</h1>
                        A Solstead NFT comes with a unique street address and a beautiful depiction of a one-of-a-kind home. The NFT does not guarantee the right to access anything on solsteads.com or any services beyond the NFT metadata and artwork.
                    </span>

                </div>
            </div>

        </div>
    );
}

export default Home;
