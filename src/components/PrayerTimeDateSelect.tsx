import { useState } from "react";
import { PrayerTimes } from "../pages/JamiaCurrentPrayerTimesPage";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PickerValue } from "@mui/x-date-pickers/internals";
import PrayerTimeTable from "./PrayerTimeTable";
import { Box } from "@mui/material";
import { LoadingSwirly } from "./LoadingSwirly";

interface PrayerTimeDateSelectProps {
  defaultTimes?: PrayerTimes;
}

const PrayerTimeDateSelect = ({ defaultTimes }: PrayerTimeDateSelectProps) => {
  const [times, setTimes] = useState<PrayerTimes | undefined>(defaultTimes);
  const [date, setDate] = useState<PickerValue>(dayjs());
  const [loading, setLoading] = useState(false);

  const handleDateChange = (newValue: PickerValue) => {
    setDate(newValue);
    setLoading(true);
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/prayer-times/${newValue?.format("YYYY-MM-DD")}`)
      .then((response) => response.json())
      .then((data) => {
        setTimes(data);
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={date}
          onChange={(newValue) => handleDateChange(newValue)}
        />
      </LocalizationProvider>
      <Box sx={{ m: 2 }} />
      {loading ? <LoadingSwirly /> : <PrayerTimeTable times={times} />}
    </>
  );
};

export default PrayerTimeDateSelect;
