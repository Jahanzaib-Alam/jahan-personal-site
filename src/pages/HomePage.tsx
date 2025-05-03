import Layout from '../components/Layout';
import Button from '../components/Button';

function HomePage() {
	return (
		<Layout title="Jahanzaib's Website">
			<div className="flex-1 bg-gray-200 flex items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					<Button to="./projects">Projects</Button>
					<Button to="./resources">Resources</Button>
				</div>
			</div>
		</Layout>
	);
}

export default HomePage;