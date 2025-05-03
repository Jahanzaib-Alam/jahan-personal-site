import NavBar from '../components/NavBar';
import Button from '../components/Button';

function HomePage() {
	return (
		<>
			<NavBar>Jahanzaib's Site</NavBar>
			<div className="flex-1 bg-gray-200 flex items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					<Button to="./projects">Projects</Button>
					<Button to="./resources">Resources</Button>
				</div>
			</div>
		</>
	);
}

export default HomePage;