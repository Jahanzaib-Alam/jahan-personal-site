import './index.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;