import { Link } from 'react-router-dom'

function Navbar() {
		let navbarComponent

		navbarComponent = (
			<div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
				<div className="container flex justify-between text-lg">
					<Link to='/home' className='text-2xl font-bold uppercase'>Farmácia Mil Gráus</Link>
					<div className='flex gap-4'>
						<Link to='/Produto' className='hover:underline'>Produtos</Link>
						<Link to='/Categoria' className='hover:underline'>Categorias</Link>
					</div>
				</div>
			</div>
		)

		return (
			<>
				{navbarComponent}
			</>
		)
}

export default Navbar