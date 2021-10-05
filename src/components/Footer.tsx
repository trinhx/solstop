import { Link } from 'react-router-dom';
import SocialBar from './Socialbar';

const Footer = () => {
	return (
		<footer className="p-6 text-center text-gray-500 flex justify-center">
                <SocialBar />
		</footer>
	);
};

export default Footer;
