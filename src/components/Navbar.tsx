import { NavLink } from 'react-router-dom';

import Brandheader from './Brandheader';
import SocialBar from './Socialbar';

const Navbar = () => {
	return (
		<>
			<SocialBar />
			<Brandheader />

			<div className="w-full flex items-center justify-center pt-4 pb-8 gap-4 text-gray-500 text-sm">
				<NavLink to={'/attributes'} activeClassName="menu-active">
					<p className="hover:text-white">ATTRIBUTES</p>
				</NavLink>
				<NavLink to={'/roadmap'} activeClassName="menu-active">
					<p className="hover:text-white">ROADMAP</p>
				</NavLink>
				<NavLink to={'/team'} activeClassName="menu-active">
					<p className="hover:text-white">TEAM</p>
				</NavLink>
				<NavLink to={'/faq'} activeClassName="menu-active">
					<p className="hover:text-white">FAQ</p>
				</NavLink>
				{/* <NavLink to={'/'} activeClassName="menu-active">
					<p className="hover:text-white">PIZZSOL GENERATOR</p>
				</NavLink> */}
				{/* <NavLink to={'/'} activeClassName="menu-active">
					<p className="hover:text-white">THE SPECIAL SAUCE</p>
				</NavLink> */}
			</div>
		</>
	);
};

export default Navbar;
