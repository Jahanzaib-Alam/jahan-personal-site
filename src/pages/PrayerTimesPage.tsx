import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import PageContentButtons from "../components/PageContentButtons";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

function PrayerTimesPage() {
  return (
    <Layout title="Prayer Times in Manchester">
      <PageContentButtons>
        <Button to="jamia">Jamia Rasooliah</Button>
        <Button to="https://bmhc.org.uk/prayers/">BMHC</Button>
        <Button to="https://www.masjidehidayah.org.uk/">Hidayah</Button>
        <Button to="https://masjidenoor.com/">Noor</Button>
      </PageContentButtons>
      <PageContent>
        <BackButton />
      </PageContent>
    </Layout>
  );
}

export default PrayerTimesPage;
