import Layout from '../components/Layout';
import PageContent from '../components/PageContent';
import ButtonList from '../components/ButtonList';
import ResourceButton from '../components/ResourceButton';
import BackButton from '../components/BackButton';

function JamiaPrayerTimesPage() {
	return (
		<Layout title="Jamia Rasooliah Prayer Times">
			<PageContent>
				<div className="w-full flex justify-center bg-gradient-to-r from-[#4682B4] to-[#0F4C81] mb-16 py-4 text-l font-bold text-white text-center">
					ظُهْر is at 1pm in Winter and 2pm in Summer and فجر is not later than 7am during Winter
				</div>
				<ButtonList>
					<ResourceButton to="/jamia-rasooliah-prayer-times/01 - January.JPG">January</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/02 - February.JPG">February</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/03 - March.JPG">March</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/04 - April.JPG">April</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/05 - May.JPG">May</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/06 - June.JPG">June</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/07 - July.JPG">July</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/08 - August.JPG">August</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/09 - September.JPG">September</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/10 - October.JPG">October</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/11 - November.JPG">November</ResourceButton>
					<ResourceButton to="/jamia-rasooliah-prayer-times/12 - December.JPG">December</ResourceButton>
				</ButtonList>
			</PageContent>
			<PageContent>
				<BackButton />
			</PageContent>
		</Layout>
	);
}

export default JamiaPrayerTimesPage;