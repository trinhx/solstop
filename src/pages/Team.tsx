import opensauce from '../assets/0pensauce.png';
import tyrone from '../assets/tyrone.png';
import porkroll from '../assets/porkroll.png';
import stickytape from '../assets/stickytape.png';
import rossco from '../assets/rossco.png';

function Team() {
	return (
		<div className="mx-auto px-4 sm:px-8">
			<div className="flex flex-wrap mx-auto justify-center">
				<div className="mx-4 mb-6 bg-black img-container">
					<img src={tyrone} alt="Tyrone" />
				</div>
				<div className="mx-4 mb-6 bg-black img-container">
					<img src={opensauce} alt="0pensauce" />
				</div>
				<div className="mx-4 mb-6 bg-black img-container">
					<img src={porkroll} alt="porkroll" />
				</div>
				<div className="mx-4 mb-6 bg-black img-container">
					<img src={stickytape} alt="stickytape" />
				</div>
				<div className="mx-4 mb-6 bg-black img-container">
					<img src={rossco} alt="rossco" />
				</div>
			</div>
		</div>
	);
}

export default Team;
