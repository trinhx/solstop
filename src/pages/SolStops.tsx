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
                <div className="h-96">
                    <h1 className="text-3xl text-midnight-green">Coming Soon</h1>
                </div>
            </div>
        </div>
    );
}

export default SolStops;
