import Layout from '../components/Layout';
import PageContent from '../components/PageContent';
import PageContentButtons from '../components/PageContentButtons';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

function ResourcesPage() {
	return (
		<Layout title="Resources">
			<PageContentButtons>
				<Button to="mcr-prayer-times">Manchester Prayer Times</Button>
			</PageContentButtons>
			<PageContent>
				<BackButton />
			</PageContent>
		</Layout>
	);
}

export default ResourcesPage;