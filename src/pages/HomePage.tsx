import Layout from '../components/Layout';
import PageContentButtons from '../components/PageContentButtons';
import Button from '../components/Button';

function HomePage() {
	return (
		<Layout title="Jahanzaib's Website">
			<PageContentButtons>
				<Button to="projects">Projects</Button>
				<Button to="resources">Resources</Button>
			</PageContentButtons>
		</Layout>
	);
}

export default HomePage;