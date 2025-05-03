import Layout from '../components/Layout';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

function ProjectsPage() {
	return (
		<Layout title="Projects">
			<div className="flex-1 bg-gray-200 flex items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					<Button to="https://zenithraptor.itch.io/grapple-pilot">Grapple Pilot</Button>
					<Button to="https://zenithraptor.itch.io/shadowmaze">Shadow Maze</Button>
				</div>
			</div>
			<div className="flex-1 bg-gray-200 flex items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					<BackButton to="/">Back</BackButton>
				</div>
			</div>
		</Layout>
	);
}

export default ProjectsPage;