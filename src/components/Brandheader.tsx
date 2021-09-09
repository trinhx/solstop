import { Link } from 'react-router-dom';

import pizzSolLogo from '../assets/PizzSol.svg';

const Brandheader = () => {
	return (
		<>
			<div className="top-0 sm:hidden mx-auto w-72">
				<Link to="/">
					<img width="282px" height="76px" className="mx-auto pt-10" src={pizzSolLogo} alt="PizzSol Title" />
					<p className="w-full mt-1 text-center text-md text-blue-100">Because Every Adventurer Needs Pizza</p>
				</Link>
			</div>
			<div className="top-0 hidden sm:block mx-auto w-80">
				<Link to="/">
					<img width="304px" height="82px" className="mx-auto pt-10" src={pizzSolLogo} alt="PizzSol Title" />
					<p className="w-full mt-1 text-center text-md text-blue-100 text-lg">Because Every Adventurer Needs Pizza</p>
				</Link>
			</div>
		</>
	);
};

export default Brandheader;
