import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { PrayerTimes } from "../pages/JamiaCurrentPrayerTimesPage";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

interface PrayerTimeTableProps {
  times?: PrayerTimes;
}

interface PrayerTimeRow {
  name: string;
  start: string;
  jamat: string;
}

const PrayerTimeTable = ({ times }: PrayerTimeTableProps) => {
  if (!times) {
    return <Box sx={{ textAlign: "center" }}>Error getting prayer times</Box>;
	}
	
	dayjs.extend(customParseFormat);

  const rows: PrayerTimeRow[] = [
    { name: "Fajr", start: times.fajrStart, jamat: times.fajrJamat },
    { name: "Sunrise", start: times.sunrise, jamat: "-" },
    { name: "Zuhr", start: times.dhuhrStart, jamat: times.dhuhrJamat },
    { name: "'Asr", start: times.asrStart, jamat: times.asrJamat },
    { name: "Maghrib", start: times.maghribStart, jamat: times.maghribJamat },
    { name: "'Isha", start: times.ishaStart, jamat: times.ishaJamat },
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 400, margin: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}> </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Start</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Jamat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: PrayerTimeRow, i: number) => (
            <TableRow key={i}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{dayjs(row.start, "HH:mm").format("hh:mm")}</TableCell>
              <TableCell>
                {dayjs(row.jamat, "HH:mm").isValid()
                  ? dayjs(row.jamat, "HH:mm").format("hh:mm")
                  : row.jamat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PrayerTimeTable;
