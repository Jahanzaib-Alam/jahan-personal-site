import './index.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
			</Routes>
		</div>
	);
}

export default App;