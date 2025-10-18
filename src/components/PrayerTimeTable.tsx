import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { PrayerTimes, Prayer } from "./MosquePrayerTimes";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

interface PrayerTimeTableProps {
  times?: PrayerTimes;
  isTodayTimes?: boolean;
  isTomorrowTimes?: boolean;
}

const PrayerTimeTable = ({
  times,
  isTodayTimes,
  isTomorrowTimes,
}: PrayerTimeTableProps) => {
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
              <TableCell>{dayjs(row.start).format("hh:mm")}</TableCell>
              <TableCell
                sx={{
                  backgroundColor:
                    isTomorrowTimes && row.jamatChanging ? "#ddffcc" : "",
                }}
              >
                {dayjs(row.jamat).isValid()
                  ? dayjs(row.jamat).format("hh:mm")
                  : row.jamat}
                {isTodayTimes && row.jamatChanging && (
                  <Tooltip title="This jamat time will change tomorrow">
                    <IconButton sx={{ paddingTop: "4.5px", paddingRight: 0 }}>
                      <InfoOutlineIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PrayerTimeTable;
