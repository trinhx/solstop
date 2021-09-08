import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer style={{ backgroundColor: '#151515' }} className="p-6 m-4 text-center text-gray-500 flex justify-center gap-6">
			<Link to={'/terms'}>
				<p className="hover:text-white">Terms and Conditions</p>
			</Link>
		</footer>
	);
};

export default Footer;
