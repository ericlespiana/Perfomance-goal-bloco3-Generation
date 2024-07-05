import './App.css';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className='min-h-[80vh]'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;