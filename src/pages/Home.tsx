import { useState, useEffect } from 'react';
import pizzolsGif from '../assets/pizzsols.gif';

const imgUrl = 'https://newsvendor.sfo2.digitaloceanspaces.com/pizzaadventures_1/';
const images = [
	'pizza_b1_s1_c1_m1_m4_v9_v4_v8.png',
	'pizza_b1_s1_c1_m1_m6_m9_v1_v8.png',
	'pizza_b1_s1_c1_m1_m7_v4_v1.png',
	'pizza_b1_s1_c1_m1_m8_v5_v1_v4.png',
	'pizza_b1_s1_c1_m1_v7.png',
	'pizza_b1_s1_c1_m2_m4_m3_v2_v6.png',
	'pizza_b1_s1_c1_m3_m1_m4_v5_v3.png',
	'pizza_b1_s1_c1_m3_m1_v7_v4_v1.png',
	'pizza_b1_s1_c1_m3_m2_m1_v6_v7_v11.png',
	'pizza_b1_s1_c1_m3_v3_v2_v10_v4.png',
	'pizza_b1_s1_c1_m3_v7_v8_v1_v3.png',
	'pizza_b1_s1_c1_m4_m1_m2_v7_v9.png',
	'pizza_b1_s1_c1_m4_m3_m1_v5_v4_v1.png',
	'pizza_b1_s1_c1_m4_m3_m2_m1_v3_v2.png',
	'pizza_b1_s1_c1_m5_m8_m1_v6.png',
	'pizza_b1_s1_c1_m5_m9_v4_v1_v2.png',
	'pizza_b1_s1_c1_m5_v4_v1.png',
	'pizza_b1_s1_c1_m5_v5.png',
	'pizza_b1_s1_c1_m6_m4_m7_v5_v7_v4.png',
	'pizza_b1_s1_c1_m7_m1_m2_m8_v6_v2_v1.png',
	'pizza_b1_s1_c1_m7_m2_m4_m6_v6_v1.png',
	'pizza_b1_s1_c1_m8_m7_m3_v2_v7_v10_v1.png',
	'pizza_b1_s1_c1_m9_m6_m1_v4_v1.png',
	'pizza_b1_s1_c1_v7_v9_v1.png',
	'pizza_b1_s1_c2_m1_m4_v6.png',
	'pizza_b1_s1_c2_m1_m7_m4_v2_v1_v4.png',
	'pizza_b1_s1_c5_m5_m3_m2_v3_v1_v2.png',
	'pizza_b1_s2_c1_m1_m9_v11_v6_v1_v2_v5.png',
	'pizza_b1_s2_c1_m1_v6_v4_v5_v3_v1.png',
	'pizza_b1_s2_c1_m2_m8_m1_v4_v5_v10.png',
	'pizza_b1_s2_c1_m3_m5_m7_v2_v3_v1.png',
	'pizza_b1_s2_c1_m3_v1_v4_v3.png',
	'pizza_b1_s2_c1_m3_v9_v6_v2.png',
	'pizza_b1_s2_c1_m5_m1_v3.png',
	'pizza_b1_s2_c1_m5_m3_m10_v1_v8_v3_v2.png',
	'pizza_b1_s2_c1_m7_m6_m4_v6_v7_v1_v5_v3.png',
	'pizza_b1_s2_c1_m7_v4.png',
	'pizza_b1_s2_c1_m8_m3_m1_m6_v5_v2_v1.png',
	'pizza_b1_s3_c1_m1_m6_v2_v8_v5.png',
	'pizza_b1_s3_c1_m2_m3_v3.png',
	'pizza_b1_s3_c1_m3_m4_v4_v7.png',
	'pizza_b1_s3_c1_m5_m4_m3_v6_v3.png',
];

// https://17d1-149-28-182-107.au.ngrok.io/pizza/list/images
// the path for the image is under "Key" e.g. pizzaadventures_1/pizza_b1_s1_c1_m1_m4_v9_v4_v8.png
// use this as an example for the for the images https://newsvendor.sfo2.digitaloceanspaces.com/pizzaadventures_1/pizza_b1_s1_c1_m1_m10_v5_v4.png

function Home() {
	const [imgIndex1, setIndex1] = useState(-1);
	const [imgIndex2, setIndex2] = useState(-1);
	const [imgIndex3, setIndex3] = useState(-1);

	useEffect(() => {
		let id1 = Math.floor(Math.random() * images.length);
		let id2 = 1;
		do {
			id2 = Math.floor(Math.random() * images.length);
		} while (id2 === id1);

		let id3 = 2;
		do {
			id3 = Math.floor(Math.random() * images.length);
		} while (id3 === id1 || id3 === id2);

		setIndex1(id1);
		setIndex2(id2);
		setIndex3(id3);
	}, []);

	return (
		<div>
			<p className="w-11/12 max-w-2xl mx-auto mt-6 mb-10 text-center text-gray-400">
				PizzSol NFTs are collections of programmatically, randomly generated NFTs on the Solana blockchain. The 1st generation consists of 10,000 randomly assembled Pizza's from over 300k total
				options. Each Pizza is comprised of a unique base, cheese, sauce and protein - the possibilities are endless! For more information on our roadmap, faq, etc, join our Discord!
			</p>

			<p className="text-center text-gray-400">Example Pizzas:</p>
			<div className="flex flex-wrap mx-auto justify-center">
				<div className="mx-4 my-6 bg-black overflow-hidden img-container">
					<img src={pizzolsGif} alt="pizza example" />
				</div>
				{/* <div className="mx-4 my-6 bg-black overflow-hidden img-container">{imgIndex1 !== -1 && <img src={`${imgUrl}${images[imgIndex1]}`} alt="pizza example" />}</div>

				<div className="mx-4 my-6 bg-black overflow-hidden img-container">{imgIndex2 !== -1 && <img src={`${imgUrl}${images[imgIndex2]}`} alt="pizza example" />}</div>

				<div className="mx-4 my-6 bg-black overflow-hidden img-container">{imgIndex3 !== -1 && <img src={`${imgUrl}${images[imgIndex3]}`} alt="pizza example" />}</div> */}
			</div>
		</div>
	);
}

export default Home;
