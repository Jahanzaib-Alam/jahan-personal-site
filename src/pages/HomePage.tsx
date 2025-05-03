import Layout from '../components/Layout';
import PageContent from '../components/PageContent';
import Button from '../components/Button';

function HomePage() {
	return (
		<Layout title="Jahanzaib's Website">
			<PageContent>
				<Button to="projects">Projects</Button>
				<Button to="resources">Resources</Button>
			</PageContent>
		</Layout>
	);
}

export default HomePage;