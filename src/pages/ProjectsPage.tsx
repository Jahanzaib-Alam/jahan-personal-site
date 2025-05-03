import Layout from '../components/Layout';
import Button from '../components/Button';

function ProjectsPage() {
	return (
		<Layout title="Projects">
			<div className="flex-1 bg-gray-200 flex items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					<Button to="https://zenithraptor.itch.io/grapple-pilot">Grapple Pilot</Button>
					<Button to="https://zenithraptor.itch.io/shadowmaze">Shadow Maze</Button>
					<Button to="/">Back</Button>
				</div>
			</div>
		</Layout>
	);
}

export default ProjectsPage;