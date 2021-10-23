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
            <img className="block mb-4 mx-auto p-4 bg-white" src={SolStopsGif} alt="SolStops"/>

            <div className="text-midnight-green max-w-6xl mx-auto px-2 sm:px-4">
                <div className="block sm:p-4 mx-auto p-5">
                    <h1 className="text-4xl font-prompt text-left mt-5 mb-3">Beautiful Bus Stops</h1>
                    <span className="leading-relaxed font-light text-xl p-5">
                        SolStops is a collection of hand drawn bus stops on the Solana network. The SolStops community will be able to create their own street name on where it lies in the Solana Metaverse. This will be a one-time opportunity as the street name will stay with the bus stop forever! Join us in discord and start submitting your street name ideas!
                    </span>
                </div>
            </div>

            <div className="text-midnight-green max-w-6xl mx-auto px-2 sm:px-4">
                <div className="block sm:p-4 mx-auto p-5">
                    <h1 className="text-4xl font-prompt text-left mt-5 mb-3">Where can I buy?</h1>
                    <span className="leading-relaxed font-light text-xl p-5">
                        Mint directly on https://solstops.io/ SolStops is currently working with secondary marketplaces for listing and verification of the collection.
                    </span>
                </div>
            </div>

            <div className="text-midnight-green max-w-6xl mx-auto px-2 sm:px-4">
                <div className="block sm:p-4 mx-auto p-5">
                    <h1 className="text-4xl font-prompt text-left mt-5 mb-3">What is the roadmap ahead?</h1>
                    <span className="leading-relaxed font-light text-xl p-5">
                        The initial roadmap is to launch on xx/xx/xx. After this, we will hand it over to the SolStops community to help MAP out the future together. Simple. No roadmap promises. There's nothing worse than that feeling of being let down, like waiting for a BUS that never arrives?!
                    </span>
                </div>
            </div>

            <div className="text-midnight-green max-w-6xl mx-auto px-2 sm:px-4">
                <div className="block sm:p-4 mx-auto p-5">
                    <h1 className="text-4xl font-prompt text-left mt-10">FAQ</h1>
                    <span className="leading-relaxed font-light text-xl">
                        <h1 className="text-xl font-bold py-3">When is mint date?</h1>
                        TBA
                    </span>

                    <span className="leading-relaxed font-light text-xl p-5">
                        <h1 className="text-xl font-bold py-3 mt-4">How can I mint a SolStop?</h1>
                        Mint directly on our webpage: https://solstops.io/
                        SolStops is currently working with secondary marketplaces for listing and verification of the collection.
                    </span>

                    <span className="leading-relaxed font-light text-xl p-5">
                        <h1 className="text-xl font-bold py-3 mt-4">What is the price of a SolStop?</h1>
                        Supply TBA. Price will be somewhere around 0.75 SOL- 1 SOL. Community in discord will decide.
                    </span>

                    <span className="leading-relaxed font-light text-xl p-5">
                        <h1 className="text-xl font-bold py-3 mt-4">What is the roadmap ahead?</h1>
                        The initial roadmap is to launch SolStops. After this, we will hand it over to the SolStops community to help MAP out the future together. Simple. No roadmap promises. There's nothing worse than that feeling of being let down, like waiting for a BUS that never arrives?!
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Home;
