import './index.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<NavBar/>
			<HomePage/>
			<Footer/>
		</div>
	);
}

export default App;