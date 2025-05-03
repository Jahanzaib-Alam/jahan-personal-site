import Layout from '../components/Layout';
import Button from '../components/Button';

function HomePage() {
	return (
		<Layout title="Jahanzaib's Website">
			<div className="flex flex-wrap justify-center gap-4">
				<Button to="./projects">Projects</Button>
				<Button to="./resources">Resources</Button>
			</div>
		</Layout>
	);
}

export default HomePage;