import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import PageContentButtons from "../components/PageContentButtons";
import { MosquePrayerTimes } from "../components/MosquePrayerTimes";

const JamiaCurrentPrayerTimesPage = () => {
  const location = useLocation();
  return (
    <Layout title="Jamia Rasooliah Prayer Times">
      <PageContent>
        <MosquePrayerTimes mosqueId={1} />
      </PageContent>
      <PageContentButtons>
        <Button to="downloads">Download Timetables</Button>
      </PageContentButtons>
      <PageContent>
        {location.pathname.includes("resources") && <BackButton />}
      </PageContent>
    </Layout>
  );
};

export default JamiaCurrentPrayerTimesPage;
