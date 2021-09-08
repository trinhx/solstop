const attributes = {
	pizzSol_bases: {
		thin: 0.66,
		pan: 0.2,
		pastry_base: 0.05,
		gluten_free: 0.05,
		cheesy_crust: 0.02,
		frankfurt_filled_crust: 0.01,
	},
	meats: {
		ham: 0.28,
		chicken: 0.1,
		mince_beef: 0.1,
		bacon: 0.1,
		italian_sausage: 0.1,
		pulled_pork: 0.1,
		prawns: 0.1,
		anchovies: 0.1,
		lobster: 0.01,
		pepperoni: 0.01,
	},
	vegetables: {
		onion: 0.22,
		spanish_onion: 0.15,
		capsicum: 0.1,
		mushroom: 0.1,
		olives: 0.1,
		rocket: 0.1,
		tomato: 0.1,
		baby_spinach: 0.03,
		cherry_tomato: 0.02,
		jalepenos: 0.02,
		pineapple: 0.01,
	},
	cheeses: {
		mozzarella: 0.87,
		parmesan: 0.1,
		fetta: 0.01,
		paneer: 0.01,
		camebert: 0.01,
	},
	sauces: {
		tomato_pizza_sauce: 0.5,
		BBQ_sauce: 0.27,
		pesto: 0.1,
		garlic: 0.1,
		chilli: 0.02,
		pizzSol_special_sauce: 0.01,
	},
};

export interface AttributeProps {
	attrName: String;
	attrObject: any;
}

const Attribute = (props: AttributeProps) => {
	const textCol = (val: any) => {
		if (val < 0.02) {
			return 'red';
		}
		if (val < 0.1) {
			return '#7FFF00';
		}
		return 'white';
	};

	const percent = (val: any) => {
		return parseInt(val * 100);
	};

	return (
		<div className="mx-4 mb-6 bg-black overflow-hidden img-container">
			<div className="p-4 font-Dos text-xl absolute w-full">
				<h1 className="text-2xl mb-4">{props.attrName}</h1>
				{Object.entries(props.attrObject).map(([key, value]) => {
					return (
						<div key={key} className="flex">
							<div style={{ color: textCol(value) }} className="capitalize">
								{key.replace(/_/g, ' ')}
							</div>
							<div className="flex-grow"></div>
							<div style={{ color: textCol(value) }} className="flex-none ">{`${percent(value)}%`}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

function Attributes() {
	return (
		<div className="mx-auto px-4 sm:px-8">
			<div className="flex flex-wrap mx-auto justify-center">
				<Attribute attrName="PizzSol Bases" attrObject={attributes.pizzSol_bases} />
				<Attribute attrName="Meats" attrObject={attributes.meats} />
				<Attribute attrName="Vegetables" attrObject={attributes.vegetables} />
				<Attribute attrName="Cheeses" attrObject={attributes.cheeses} />
				<Attribute attrName="Sauces" attrObject={attributes.sauces} />
			</div>
		</div>
	);
}

export default Attributes;
