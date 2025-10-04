import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { NextPrayerInfo } from "./NextPrayerInfo";
import PrayerTimeDateSelect from "./PrayerTimeDateSelect";
import PrayerTimeTable from "./PrayerTimeTable";
import { useState, useEffect } from "react";
import { LoadingMessage } from "./LoadingMessage";

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

interface MosquePrayerTimesProps {
  mosqueId?: number;
}

export const MosquePrayerTimes = ({ mosqueId }: MosquePrayerTimesProps) => {
  const [currentTimes, setCurrentTimes] = useState<CurrentPrayerTimes>();
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState("today");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/prayer-times/current/${mosqueId}`)
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

  return loading ? (
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
  );
};
