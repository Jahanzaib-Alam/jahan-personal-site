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

  const rows: PrayerTimeRow[] = [
    { name: "Fajr", start: times.fajrStart, jamat: times.fajrJamat },
    { name: "Sunrise", start: times.sunrise, jamat: "-" },
    { name: "Zuhr", start: times.dhuhrStart, jamat: times.dhuhrJamat },
    { name: "'Asr", start: times.asrStart, jamat: times.asrJamat },
    { name: "Maghrib", start: "-", jamat: times.maghribJamat },
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
              <TableCell>{row.start.slice(0, 5)}</TableCell>
              <TableCell>{row.jamat.slice(0, 5)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PrayerTimeTable;
