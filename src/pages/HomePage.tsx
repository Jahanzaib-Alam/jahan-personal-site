import Button from '../components/Button';

function HomePage() {
	return (
		<div className="flex-1 bg-gray-200 flex items-center justify-center">
			<div className="flex flex-wrap justify-center gap-4">
				<Button to="./projects.html">Projects</Button>
				<Button to="./resources.html">Resources</Button>
			</div>
		</div>
	);
}

export default HomePage;