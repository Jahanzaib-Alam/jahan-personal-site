import Layout from '../components/Layout';
import Button from '../components/Button';

function ProjectsPage() {
	return (
		<Layout title="Projects">
			<div className="flex flex-wrap justify-center gap-4">
				<Button to="https://zenithraptor.itch.io/grapple-pilot">Grapple Pilot</Button>
				<Button to="https://zenithraptor.itch.io/shadowmaze">Shadow Maze</Button>
				<Button to="/">Back</Button>
			</div>
		</Layout>
	);
}

export default ProjectsPage;