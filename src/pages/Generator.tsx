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

function Generator() {
	const { register, handleSubmit, watch } = useForm();
	const [ingredients, setIngredients] = useState<Array<any>>([]);

	const watchBase = watch('base', 'pan');
	const watchMeat1 = watch('meat1', 'none');
	const watchMeat2 = watch('meat2', 'none');
	const watchMeat3 = watch('meat3', 'none');
	const watchMeat4 = watch('meat4', 'none');

	useEffect(() => {
		console.log(watchBase);
		console.log(watchMeat1);
		console.log(watchMeat2);

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

		console.log(updatedIngs);

		setIngredients(updatedIngs);
	}, [watchBase, watchMeat1, watchMeat2, watchMeat3, watchMeat4]);

	return (
		<div className="mx-auto px-4 sm:px-8">
			<div className="flex flex-wrap mx-auto justify-center">
				<div className="mx-4 mb-6 bg-black img-container">
					<div className="p-2 sm:p-4 font-dejavu absolute w-full text-xs sm:text-base">
						<form>
							<div className="capitalize">Choose your base:</div>
							<select className="bg-gray-700 w-full" {...register('base')}>
								{bases.map((ing, index) => (
									<option key={index} value={ing.name}>
										{ing.name}
									</option>
								))}
							</select>
							<div className="capitalize mt-4">Choose your meats:</div>
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
						</form>
					</div>
				</div>

				<PizzSol ingredient={ingredients} />
			</div>
		</div>
	);
}

export default Generator;
