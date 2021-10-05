import { Link } from 'react-router-dom';

import solStopLogo from '../assets/SolStopLogo.png'

const Brandheader = () => {
	return (
		<>
			<div className="top-0 sm:hidden mx-auto w-72">
				<Link to="/">
                    <h1 className="text-4xl font-kavoon">SolStops</h1>
				</Link>
			</div>

			<div className="top-0 hidden sm:block mx-auto w-80">
				<Link to="/">
                    <h1 className="text-6xl font-kavoon">SolStops</h1>
				</Link>
			</div>
		</>
	);
};

export default Brandheader;
