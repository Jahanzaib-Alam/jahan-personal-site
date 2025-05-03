import Layout from '../components/Layout';
import PageContent from '../components/PageContent';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

function ProjectsPage() {
	return (
		<Layout title="Projects">
			<PageContent>
				<Button to="https://zenithraptor.itch.io/grapple-pilot">Grapple Pilot</Button>
				<Button to="https://zenithraptor.itch.io/shadowmaze">Shadow Maze</Button>
			</PageContent>
			<PageContent>
				<BackButton to="/">Back</BackButton>
			</PageContent>
		</Layout>
	);
}

export default ProjectsPage;