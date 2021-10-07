import { NavLink } from 'react-router-dom';

import solstop1 from '../assets/solstop1.jpg';
import solstop2 from '../assets/solstop2.jpg';
import solstop3 from '../assets/solstop3.jpg';
import solstop4 from '../assets/solstop4.jpg';
import solstop5 from '../assets/solstop5.jpg';

function SolStops() {
	// ReactGA.pageview(window.location.pathname);
	return (
		<div className="mx-auto px-4 sm:px-8">
			<div className="flex flex-wrap mx-auto justify-center">
                <div className="mx-4 mb-6 bg-white img-container">
                    <NavLink to={'/solstop1'}>
                        <img className="p-4" src={solstop1} alt="SolStop 1" />
                    </NavLink>
                </div>

                <div className="mx-4 mb-6 bg-white img-container">
                    <img className="p-4" src={solstop2} alt="SolStop 2" />
                </div>

                <div className="mx-4 mb-6 bg-white img-container">
                    <img className="p-4" src={solstop3} alt="SolStop 3" />
                </div>

                <div className="mx-4 mb-6 bg-white img-container">
                    <img className="p-4" src={solstop4} alt="SolStop 4" />
                </div>

                <div className="mx-4 mb-6 bg-white img-container">
                    <img className="p-4" src={solstop5} alt="SolStop 5" />
                </div>
            </div>
        </div>
    );
}

export default SolStops;
