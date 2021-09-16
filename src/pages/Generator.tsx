import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
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

// export const bases = [
// 	{ name: 'pan', chance: 30, color: 'white' },
// 	{ name: 'thick crust', chance: 30, color: 'white' },
// 	{ name: 'medium crust', chance: 31, color: 'white' },
// 	{ name: 'gluten free', chance: 3, color: 'yellow' },
// 	{ name: 'cheesy crust', chance: 2, color: 'lime' },
// 	{ name: 'thin crust', chance: 2, color: 'lime' },
// 	{ name: 'flatbread', chance: 1, color: 'red' },
// 	{ name: 'new york', chance: 1, color: 'red' },
// ];

const randomIndex = (ingObject: any) => {
	return Math.floor(Math.random() * ingObject.length);
};

const randomArray = (ingObject: any, amount: Number) => {
	let randArray: Array<any> = [];

	for (let i = 0; i < amount; i++) {
		randArray.push(Math.floor(Math.random() * ingObject.length));
	}

	return randArray.filter((a, b) => randArray.indexOf(a) === b);
};

function Generator() {
	const { register, handleSubmit, watch, setValue } = useForm();

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
		setValue('base', bases[randomIndex(bases)].name);
		setValue('cheese', cheeses[randomIndex(cheeses)].name);
		setValue('sauce', sauces[randomIndex(sauces)].name);

		const randomMeats = randomArray(meats, 4);
		const randomVegs = randomArray(vegetables, 4);

		if (meats[randomMeats[0]] && Math.floor(Math.random() * 10) > 2) {
			setValue('meat1', meats[randomMeats[0]].name);
		} else {
			setValue('meat1', 'none');
		}

		if (meats[randomMeats[1]] && Math.floor(Math.random() * 10) > 4) {
			setValue('meat2', meats[randomMeats[1]].name);
		} else {
			setValue('meat2', 'none');
		}

		if (meats[randomMeats[3]] && Math.floor(Math.random() * 10) > 6) {
			setValue('meat3', meats[randomMeats[2]].name);
		} else {
			setValue('meat3', 'none');
		}

		if (meats[randomMeats[4]] && Math.floor(Math.random() * 10) > 8) {
			setValue('meat4', meats[randomMeats[3]].name);
		} else {
			setValue('meat4', 'none');
		}

		if (meats[randomVegs[0]] && Math.floor(Math.random() * 10) > 2) {
			setValue('veg1', vegetables[randomVegs[0]].name);
		} else {
			setValue('veg1', 'none');
		}

		if (meats[randomVegs[1]] && Math.floor(Math.random() * 10) > 4) {
			setValue('veg2', vegetables[randomVegs[1]].name);
		} else {
			setValue('veg2', 'none');
		}

		if (meats[randomVegs[3]] && Math.floor(Math.random() * 10) > 6) {
			setValue('veg3', vegetables[randomVegs[2]].name);
		} else {
			setValue('veg3', 'none');
		}

		if (meats[randomVegs[4]] && Math.floor(Math.random() * 10) > 8) {
			setValue('veg4', vegetables[randomVegs[3]].name);
		} else {
			setValue('veg4', 'none');
		}
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

	useEffect(() => {
		randomize();
	}, []);

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
