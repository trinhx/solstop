const green = '#17fa02';
const blue = '#2663ff';
const purple = '#a100ff';
const orange = 'orange';
const white = 'white';

export const bases = [
	{ name: 'pan', chance: 38, color: white },
	{ name: 'thin and crispy', chance: 38, color: white },
	{ name: 'gluten free crust', chance: 10, color: green },
	{ name: 'stuffed cheesy crust', chance: 5, color: blue },
	{ name: 'pastry', chance: 5, color: blue },
	{ name: 'flatbread', chance: 2, color: purple },
	{ name: 'chicago deep dish', chance: 1, color: orange },
	{ name: 'new york', chance: 1, color: orange },
];

export const meats = [
	{ name: 'chicken', chance: 19, color: white },
	{ name: 'mince beef', chance: 19, color: white },
	{ name: 'ham', chance: 19, color: white },

	{ name: 'meat balls', chance: 10, color: green },
	{ name: 'pulled pork', chance: 10, color: green },

	{ name: 'chorizo', chance: 5, color: blue },
	{ name: 'italian sausage', chance: 5, color: blue },
	{ name: 'bacon', chance: 5, color: blue },

	{ name: 'anchovies', chance: 2, color: purple },
	{ name: 'prosciutto', chance: 2, color: purple },
	{ name: 'sopresa salami', chance: 2, color: purple },

	{ name: 'prawns', chance: 1, color: orange },
	{ name: 'pepperoni', chance: 1, color: orange },
];

export const vegetables = [
	{ name: 'tomato', chance: 10, color: white },
	{ name: 'cherry tomato', chance: 10, color: white },
	{ name: 'spinach', chance: 9, color: white },
	{ name: 'rocket', chance: 9, color: white },
	{ name: 'mushroom', chance: 9, color: white },
	{ name: 'bell peppers', chance: 9, color: white },
	{ name: 'spanish onion', chance: 9, color: white },
	{ name: 'onion', chance: 9, color: white },

	{ name: 'oregano', chance: 4, color: green },
	{ name: 'sun dried tomatoes', chance: 4, color: green },
	{ name: 'olive oil', chance: 4, color: green },
	{ name: 'garlic', chance: 4, color: green },

	{ name: 'olives', chance: 3, color: blue },
	{ name: 'basil', chance: 3, color: blue },

	{ name: 'san marzano tomatoes', chance: 2, color: purple },

	{ name: 'jalepenos', chance: 1, color: orange },
	{ name: 'pineapple', chance: 1, color: orange },
];

export const cheeses = [
	{ name: 'mozzarella cheese', chance: 32, color: white },
	{ name: 'cheddar cheese', chance: 32, color: white },

	{ name: 'feta cheese', chance: 10, color: green },
	{ name: 'asiago cheese', chance: 10, color: green },

	{ name: 'ricotta cheese', chance: 5, color: blue },
	{ name: 'bocconcini cheese', chance: 5, color: blue },

	{ name: 'goat cheese', chance: 2, color: purple },
	{ name: 'gorgonzola cheese', chance: 2, color: purple },

	{ name: 'provolone cheese', chance: 1, color: orange },
	{ name: 'parmigiano reggiano', chance: 1, color: orange },
];

export const sauces = [
	{ name: 'classic pizza sauce', chance: 62.4, color: white },

	{ name: 'bbq sauce', chance: 20, color: green },

	{ name: 'garlic sauce', chance: 10, color: blue },

	{ name: 'pesto', chance: 4, color: purple },

	{ name: 'chilli sauce', chance: 2, color: orange },

	{ name: 'PizzSol Special Sauce', chance: 1.6, color: 'special' },
];
