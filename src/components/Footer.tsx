import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer style={{ backgroundColor: '#151515' }} className="p-6 m-4 text-center text-gray-500 flex justify-center gap-6">
            <div className="flex flex-col">
			<Link to={'/terms'}>
				<p className="hover:text-white">Terms and Conditions</p>
			</Link>
            <span className="text-sm p-2">The eatPizzSol team. All rights reserved</span>
            </div>
		</footer>
	);
};

export default Footer;
