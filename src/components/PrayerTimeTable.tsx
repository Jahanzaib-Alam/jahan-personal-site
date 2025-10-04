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
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { PrayerTimes, Prayer } from "./MosquePrayerTimes";

interface PrayerTimeTableProps {
  times?: PrayerTimes;
}

const PrayerTimeTable = ({ times }: PrayerTimeTableProps) => {
  if (!times) {
    return <Box sx={{ textAlign: "center" }}>Error getting prayer times</Box>;
  }

  dayjs.extend(customParseFormat);

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
          {times.prayers.map((row: Prayer, i: number) => (
            <TableRow key={i}>
              <TableCell>
                {row.name == "Jum'ah" ? "Ẓuhr/Jum'ah" : row.name}
              </TableCell>
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
