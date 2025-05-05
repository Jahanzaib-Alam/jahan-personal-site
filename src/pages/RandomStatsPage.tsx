import Layout from '../components/Layout';
import PageContent from '../components/PageContent';
import BackButton from '../components/BackButton';
import SteamGamesList from '../components/SteamGamesList';

function RandomStatsPage() {
	return (
		<Layout title="Random Stats">
			<PageContent>
				<SteamGamesList />
			</PageContent>
			<PageContent>
				<BackButton />
			</PageContent>
		</Layout>
	);
}

export default RandomStatsPage;