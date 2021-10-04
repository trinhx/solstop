import { NavLink } from 'react-router-dom';

import Brandheader from './Brandheader';
import SocialBar from './Socialbar';

const HomeIcon = () => (
	<svg fill="#6B7280" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
		<path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z" />
	</svg>
);

const Navbar = () => {
	return (
		<>
			<SocialBar />
			<Brandheader />

			<div className="w-full flex-wrap sm:flex mx-4 sm:mx-0 items-center justify-center pt-4 pb-8 gap-4 text-gray-500 text-base">
				<NavLink to={'/'} exact activeClassName="menu-active">
					<HomeIcon />
				</NavLink>
				<NavLink to={'/attributes'} activeClassName="menu-active">
					<p className="hover:text-white">ATTRIBUTES</p>
				</NavLink>
				<NavLink to={'/team'} activeClassName="menu-active">
					<p className="hover:text-white">TEAM</p>
				</NavLink>
				<NavLink to={'/faq'} activeClassName="menu-active">
					<p className="hover:text-white">FAQ</p>
				</NavLink>
				{/* <NavLink to={'/'} activeClassName="menu-active">
					<p className="hover:text-white">THE SPECIAL SAUCE</p>
				</NavLink> */}
			</div>
		</>
	);
};

export default Navbar;
