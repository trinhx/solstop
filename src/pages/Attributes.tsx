const bases = [
	{ name: 'pan', chance: 30, color: 'white' },
	{ name: 'thick crust', chance: 30, color: 'white' },
	{ name: 'medium crust', chance: 31, color: 'white' },
	{ name: 'gluten free', chance: 3, color: 'yellow' },
	{ name: 'cheesy crust', chance: 2, color: 'lime' },
	{ name: 'thin crust', chance: 2, color: 'lime' },
	{ name: 'flatbread', chance: 1, color: 'red' },
	{ name: 'new york', chance: 1, color: 'red' },
];

const meats = [
	{ name: 'chicken', chance: 12, color: 'white' },
	{ name: 'chorizo', chance: 15, color: 'white' },
	{ name: 'meat balls', chance: 15, color: 'white' },
	{ name: 'lobster', chance: 15, color: 'white' },
	{ name: 'pulled pork', chance: 14.5, color: 'white' },
	{ name: 'mince beef', chance: 14, color: 'white' },
	{ name: 'ham', chance: 2.5, color: 'yellow' },
	{ name: 'italian sausage', chance: 2.5, color: 'yellow' },
	{ name: 'bacon', chance: 2.5, color: 'yellow' },
	{ name: 'salami', chance: 2, color: 'lime' },
	{ name: 'prosciutto', chance: 2, color: 'lime' },
	{ name: 'anchovies', chance: 1, color: 'red' },
	{ name: 'prawns', chance: 1, color: 'red' },
	{ name: 'pepperoni', chance: 1, color: 'red' },
];

const vegetables = [
	{ name: 'crushed red pepper', chance: 9, color: 'white' },
	{ name: 'spinach', chance: 9, color: 'white' },
	{ name: 'cherry tomato', chance: 9, color: 'white' },
	{ name: 'tomato', chance: 8, color: 'white' },
	{ name: 'rocket', chance: 8, color: 'white' },
	{ name: 'mushroom', chance: 8, color: 'white' },
	{ name: 'bell peppers', chance: 8, color: 'white' },
	{ name: 'spanish onion', chance: 8, color: 'white' },
	{ name: 'onion', chance: 8, color: 'white' },
	{ name: 'oregano', chance: 9, color: 'white' },
	{ name: 'sun dried tomatoes', chance: 2.5, color: 'yellow' },
	{ name: 'caramelized onions', chance: 2.5, color: 'yellow' },
	{ name: 'olive oil', chance: 2.5, color: 'yellow' },
	{ name: 'garlic', chance: 2.5, color: 'yellow' },
	{ name: 'olives', chance: 2, color: 'lime' },
	{ name: 'basil', chance: 2, color: 'lime' },
	{ name: 'jalepenos', chance: 1, color: 'red' },
	{ name: 'pineapple', chance: 1, color: 'red' },
];

const cheeses = [
	{ name: 'cheddar cheese', chance: 31, color: 'white' },
	{ name: "goat's cheese", chance: 30, color: 'white' },
	{ name: 'feta cheese', chance: 30, color: 'white' },
	{ name: 'asiago cheese', chance: 2.5, color: 'yellow' },
	{ name: 'ricotta cheese', chance: 2.5, color: 'yellow' },
	{ name: 'provolone cheese', chance: 2, color: 'lime' },
	{ name: 'parmigiano-reggiano cheese', chance: 1, color: 'red' },
	{ name: 'mozzarella cheese', chance: 1, color: 'red' },
];

const sauces = [
	{ name: 'classic pizza sauce', chance: 87.4, color: 'white' },
	{ name: 'garlic sauce', chance: 4, color: 'yellow' },
	{ name: 'pesto', chance: 4, color: 'yellow' },
	{ name: 'bbq sauce', chance: 3, color: 'lime' },
	{ name: 'chilli sauce', chance: 1, color: 'red' },
	{ name: 'PizzSol Special Sauce', chance: 0.8, color: 'special' },
];

export interface AttributeProps {
	ingredient: Array<any>;
	attrName: String;
}

const Attribute = (props: AttributeProps) => {
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
