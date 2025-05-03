import NavBar from '../components/NavBar';
import Button from '../components/Button';

function ProjectsPage() {
	return (
		<>
			<NavBar>Projects</NavBar>
			<div className="flex-1 bg-gray-200 flex items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					<Button to="https://zenithraptor.itch.io/grapple-pilot">Grapple Pilot</Button>
					<Button to="https://zenithraptor.itch.io/shadowmaze">Shadow Maze</Button>
					<Button to="/">Back</Button>
				</div>
			</div>
		</>
	);
}

export default ProjectsPage;