import { Link } from 'react-router-dom';

import solStopLogo from '../assets/SolStopLogo.png'

const Brandheader = () => {
	return (
		<>
			<div className="top-0 sm:hidden mx-auto w-72">
                <img src={solStopLogo} />
				<Link to="/">
                    <h1 className="text-6xl text-midnight-green font-kavoon">SolStops</h1>
				</Link>
			</div>

			<div className="top-0 hidden sm:block mx-auto w-80">
				<Link to="/">
                    <h1 className="flex text-6xl text-midnight-green font-kavoon">SolStops
                    <img className="flex" src={solStopLogo} height="25%" width="25%"/>
                    </h1>
				</Link>
			</div>
		</>
	);
};

export default Brandheader;
