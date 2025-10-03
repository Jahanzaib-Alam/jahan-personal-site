import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import PrayerTimeTable from "../components/PrayerTimeTable";
import PrayerTimeDateSelect from "../components/PrayerTimeDateSelect";
import Button from "../components/Button";
import { LoadingMessage } from "../components/LoadingMessage";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import PageContentButtons from "../components/PageContentButtons";
import { NextPrayerInfo } from "../components/NextPrayerInfo";

export interface Prayer {
  name: string;
  start: string;
  jamat: string;
}

export interface PrayerTimes {
  date: string;
  prayers: Prayer[];
}

interface CurrentPrayerTimes {
  today: PrayerTimes;
  tomorrow: PrayerTimes;
  nextStart: Prayer;
  nextJamat: Prayer;
}

const JamiaCurrentPrayerTimesPage = () => {
  const [currentTimes, setCurrentTimes] = useState<CurrentPrayerTimes>();
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState("today");
  const location = useLocation();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/prayer-times/current/1`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentTimes(data);
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Layout title="Jamia Rasooliah Prayer Times">
      <PageContent>
        {loading ? (
          <LoadingMessage />
        ) : (
          <>
            <NextPrayerInfo
              nextStart={currentTimes?.nextStart}
              nextJamat={currentTimes?.nextJamat}
            />
            <TabContext value={tabValue}>
              <TabList
                onChange={handleTabChange}
                aria-label="Prayer Times Tabs"
                sx={{ paddingTop: "20px" }}
              >
                <Tab label="Today" value="today" />
                <Tab label="Tomorrow" value="tomorrow" />
                <Tab label="Select Date" value="selectDate" />
              </TabList>
              <TabPanel value="today">
                <PrayerTimeTable times={currentTimes?.today} />
              </TabPanel>
              <TabPanel value="tomorrow">
                <PrayerTimeTable times={currentTimes?.tomorrow} />
              </TabPanel>
              <TabPanel value="selectDate">
                <PrayerTimeDateSelect defaultTimes={currentTimes?.today} />
              </TabPanel>
            </TabContext>
          </>
        )}
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
