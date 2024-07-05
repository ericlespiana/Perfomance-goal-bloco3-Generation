import { Link } from "react-router-dom";

function Home() {
	return (
	<>
		<div className="bg-indigo-900 flex justify-center">
			<div className='container grid grid-cols-2 text-white'>
			<div className="flex flex-col gap-4 items-center justify-center py-4">
				<h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
				<p className='text-xl'>Eleita a única farmácia mil gráus do mundo!</p>
				<div className="flex justify-around gap-4">
				<Link to='/categoria'>
					<button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Categorias</button>
				</Link>
			</div>
			</div>
			</div>
		</div>
	</>
	);
}

export default Home;