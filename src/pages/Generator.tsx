import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { bases, meats, vegetables, cheeses, sauces } from '../constants/Ingredients';

export interface AttributeProps {
	ingredient: Array<any>;
}

const PizzSol = (props: AttributeProps) => {
	return (
		<>
			<div className="mx-4 mb-6 bg-black img-container">
				<div className="p-2 sm:p-4 font-dejavu absolute w-full text-xs sm:text-base">
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

let baseRolls: any = {};
for (const key of bases) {
	baseRolls[key.name] = key.chance * 0.01;
}

let meatRolls: any = {};
for (const key of meats) {
	meatRolls[key.name] = key.chance * 0.01;
}

let vegeRolls: any = {};
for (const key of vegetables) {
	vegeRolls[key.name] = key.chance * 0.01;
}

let cheeseRolls: any = {};
for (const key of cheeses) {
	cheeseRolls[key.name] = key.chance * 0.01;
}

let sauceRolls: any = {};
for (const key of sauces) {
	sauceRolls[key.name] = key.chance * 0.01;
}

function weightedRandom(prob: any) {
	let i,
		sum = 0,
		r = Math.random();
	for (i in prob) {
		sum += prob[i];
		if (r <= sum) return i;
	}
}

const randomArray = (amount: Number, ingObj: any) => {
	let randArray: Array<any> = [];

	for (let i = 0; i < amount; i++) {
		if (Math.floor(Math.random() * 2) > 0) {
			randArray.push(weightedRandom(ingObj));
		}
	}

	return randArray.filter((a, b) => randArray.indexOf(a) === b);
};

function Generator() {
	const { register, watch, setValue } = useForm();

	const [ingredients, setIngredients] = useState<Array<any>>([]);

	const watchBase = watch('base', 'pan');
	const watchMeat1 = watch('meat1', 'none');
	const watchMeat2 = watch('meat2', 'none');
	const watchMeat3 = watch('meat3', 'none');
	const watchMeat4 = watch('meat4', 'none');
	const watchVeg1 = watch('veg1', 'none');
	const watchVeg2 = watch('veg2', 'none');
	const watchVeg3 = watch('veg3', 'none');
	const watchVeg4 = watch('veg4', 'none');
	const watchCheese = watch('cheese', 'mozzarella cheese');
	const watchSauce = watch('sauce', 'classic pizza sauce');

	const randomize = () => {
		setValue('base', weightedRandom(baseRolls));
		setValue('cheese', weightedRandom(cheeseRolls));
		setValue('sauce', weightedRandom(sauceRolls));

		let meatArray = randomArray(4, meatRolls);

		for (let i = 0; i < 4; i++) {
			setValue(`meat${i + 1}`, 'none');
		}

		meatArray.forEach((meat, index) => {
			setValue(`meat${index + 1}`, meat);
		});

		let vegArray = randomArray(4, vegeRolls);

		for (let i = 0; i < 4; i++) {
			setValue(`veg${i + 1}`, 'none');
		}
		vegArray.forEach((veg, index) => {
			setValue(`veg${index + 1}`, veg);
		});
	};

	useEffect(() => {
		const updatedIngs: Array<any> = [];

		bases.forEach((ing) => {
			if (ing.name === watchBase) {
				updatedIngs.push(ing);
			}
		});

		meats.forEach((ing) => {
			if (ing.name === watchMeat1) {
				updatedIngs.push(ing);
			} else if (ing.name === watchMeat2) {
				updatedIngs.push(ing);
			} else if (ing.name === watchMeat3) {
				updatedIngs.push(ing);
			} else if (ing.name === watchMeat4) {
				updatedIngs.push(ing);
			}
		});

		vegetables.forEach((ing) => {
			if (ing.name === watchVeg1) {
				updatedIngs.push(ing);
			} else if (ing.name === watchVeg2) {
				updatedIngs.push(ing);
			} else if (ing.name === watchVeg3) {
				updatedIngs.push(ing);
			} else if (ing.name === watchVeg4) {
				updatedIngs.push(ing);
			}
		});

		cheeses.forEach((ing) => {
			if (ing.name === watchCheese) {
				updatedIngs.push(ing);
			}
		});

		sauces.forEach((ing) => {
			if (ing.name === watchSauce) {
				updatedIngs.push(ing);
			}
		});

		setIngredients(updatedIngs);
	}, [watchBase, watchMeat1, watchMeat2, watchMeat3, watchMeat4, watchVeg1, watchVeg2, watchVeg3, watchVeg4, watchCheese, watchSauce]);

	// useEffect(() => {
	// 	randomize();
	// }, [randomize]);

	return (
		<div className="mx-auto px-4 sm:px-8">
			<div className="flex flex-wrap mx-auto justify-center">
				<div className="mx-4 mb-6 bg-black img-container">
					<button className="bg-indigo-800 my-2 py-1 px-4 flex justify-center text-sm mx-auto hover:bg-indigo-600" onClick={randomize}>
						Randomize
					</button>
					<div className="p-2 sm:p-4 font-dejavu absolute w-full text-xs sm:text-base">
						<form>
							<h2>Choose Your Base:</h2>
							<select className="bg-gray-700 w-full capitalize" {...register('base')}>
								{bases.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<h2 className="mt-4">Choose Your Meats:</h2>
							<select className="bg-gray-700 w-full" {...register('meat1')}>
								<option value="none">none</option>
								{meats.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<select className="bg-gray-700 w-full" {...register('meat2')}>
								<option value="none">none</option>
								{meats.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<select className="bg-gray-700 w-full" {...register('meat3')}>
								<option value="none">none</option>
								{meats.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<select className="bg-gray-700 w-full" {...register('meat4')}>
								<option value="none">none</option>
								{meats.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<h2 className="mt-4">Choose Your Vegetables:</h2>
							<select className="bg-gray-700 w-full" {...register('veg1')}>
								<option value="none">none</option>
								{vegetables.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<select className="bg-gray-700 w-full" {...register('veg2')}>
								<option value="none">none</option>
								{vegetables.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<select className="bg-gray-700 w-full" {...register('veg3')}>
								<option value="none">none</option>
								{vegetables.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<select className="bg-gray-700 w-full" {...register('veg4')}>
								<option value="none">none</option>
								{vegetables.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<h2 className="mt-4">Choose Your Cheese:</h2>
							<select className="bg-gray-700 w-full capitalize" {...register('cheese')}>
								{cheeses.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>

							<h2 className="mt-4">Choose Your Base:</h2>
							<select className="bg-gray-700 w-full capitalize" {...register('sauce')}>
								{sauces.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>
						</form>
					</div>
				</div>

				<PizzSol ingredient={ingredients} />
			</div>
		</div>
	);
}

export default Generator;
