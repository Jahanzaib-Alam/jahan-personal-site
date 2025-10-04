import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import { MosquePrayerTimes } from "../components/MosquePrayerTimes";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { useState } from "react";

const MultiMosquePrayerTimesPage = () => {
  const [tabValue, setTabValue] = useState("1");
  const location = useLocation();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Layout title="Prayer Times">
      <PageContent>
        <TabContext value={tabValue}>
          <TabList
            onChange={handleTabChange}
            aria-label="Prayer Times Tabs"
            sx={{ paddingTop: "20px" }}
          >
            <Tab label="Jamiah Rasooliah" value="1" />
            <Tab label="BMHC" value="2" />
            <Tab label="Hidayah" value="3" />
          </TabList>
          <TabPanel value="1">
            <MosquePrayerTimes mosqueId={1} />
          </TabPanel>
          <TabPanel value="2">
            <MosquePrayerTimes mosqueId={2} />
          </TabPanel>
          <TabPanel value="3">
            <MosquePrayerTimes mosqueId={3} />
          </TabPanel>
        </TabContext>
      </PageContent>
      <PageContent>
        {location.pathname.includes("resources") && <BackButton />}
      </PageContent>
    </Layout>
  );
};

export default MultiMosquePrayerTimesPage;
