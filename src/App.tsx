import './App.css';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/NavBar';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';

function App() {
	
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className='min-h-[80vh]'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/cadastroCategoria" element={<FormularioCategoria />} />
						<Route path="/categoria" element={<ListaCategoria />} />
						<Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
						<Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;