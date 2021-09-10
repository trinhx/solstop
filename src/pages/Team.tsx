function Team() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-8 mb-96">
			<div className="flex flex-wrap mx-auto justify-center">
				<div className="mx-4 mb-6 bg-black overflow-hidden img-container">
					<div className="p-4 font-dejavu sm:text-lg absolute">
						<h1 className="text-lg sm:text-xl mb-4">The Team</h1>
						<p>
							PizzSol Base: <span style={{ color: 'red' }}>Mi Goes</span>
						</p>
						<p>
							Meats: <span style={{ color: 'blue' }}>Pork Roll</span>
						</p>
						<p>
							Vegetables: <span style={{ color: 'magenta' }}>Tyrone</span>
						</p>
						<p>
							Cheeses: <span style={{ color: 'yellow' }}>Sticky Tape</span>
						</p>
						<p>
							Sauces: <span style={{ color: 'Chartreuse' }}>Rosso</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
