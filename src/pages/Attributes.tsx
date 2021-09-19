import { bases, meats, vegetables, cheeses, sauces } from '../constants/Ingredients';
import ReactGA from 'react-ga';

export interface AttributeProps {
	ingredient: Array<any>;
	attrName: String;
}

const Attribute = (props: AttributeProps) => {
	ReactGA.pageview(window.location.pathname);
	return (
		<>
			<h1 className="sm:hidden">{props.attrName}</h1>
			<div className="mx-4 mb-6 bg-black img-container">
				<div className="p-2 sm:p-4 font-dejavu absolute w-full text-xs sm:text-base">
					<h1 className="text-base sm:text-lg mb-2 sm:mb-4 hidden sm:block">{props.attrName}</h1>
					{props.ingredient.map((ing, index) => (
						<div key={index} className="flex">
							{ing.color === 'special' ? (
								<>
									<div className="special-text">{ing.name}</div>
									<div className="flex-grow"></div>
									<div className="special-text">{ing.chance}%</div>
								</>
							) : (
								<>
									<div style={{ color: ing.color }} className="capitalize">
										{ing.name}
									</div>
									<div className="flex-grow"></div>
									<div style={{ color: ing.color }} className="capitalize">
										{ing.chance}%
									</div>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

function Attributes() {
	return (
		<div className="mx-auto px-4 sm:px-8">
			<div className="flex flex-wrap mx-auto justify-center">
				<Attribute attrName="PizzSol Bases" ingredient={bases} />
				<Attribute attrName="Meats" ingredient={meats} />
				<Attribute attrName="Vegetables" ingredient={vegetables} />
				<Attribute attrName="Cheeses" ingredient={cheeses} />
				<Attribute attrName="Sauces" ingredient={sauces} />
			</div>
		</div>
	);
}

export default Attributes;
