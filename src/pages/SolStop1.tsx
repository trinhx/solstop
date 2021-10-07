import solstop1 from '../assets/solstop1.jpg';

function SolStops() {
	// ReactGA.pageview(window.location.pathname);
	return (
		<div className="mx-auto px-4 sm:px-8">
            <div className="flex flex-wrap mx-auto justify-center align-center text-midnight-green text-2xl">
                <div className="font-bold">&lt;&lt; Prev Stop</div>

                <div className="mx-4 mb-6 bg-black img-container">
                    <img src={solstop1} alt="SolStop 1" />
                </div>

                    <div className="font-bold">Next Stop &gt;&gt;</div>
            </div>
        </div>
    );
}

export default SolStops;
