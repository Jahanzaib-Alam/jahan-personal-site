import Layout from '../components/Layout';
import PageContent from '../components/PageContent';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

function ResourcesPage() {
	return (
		<Layout title="Resources">
			<PageContent>
				<Button to="mcr-prayer-times">Manchester Prayer Times</Button>
			</PageContent>
			<PageContent>
				<BackButton />
			</PageContent>
		</Layout>
	);
}

export default ResourcesPage;