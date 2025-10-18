import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Prayer } from "./MosquePrayerTimes";
import { PrayerCountdown } from "./PrayerCountdown";

interface NextPrayerInfoProps {
  nextStart?: Prayer;
  nextJamat?: Prayer;
}

export const NextPrayerInfo: React.FC<NextPrayerInfoProps> = ({
  nextStart,
  nextJamat,
}) => {
  if (!nextStart || !nextJamat) {
    return;
  }
  dayjs.extend(customParseFormat);
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 400,
        margin: "auto",
        backgroundColor: "#cce5ff",
        marginBottom: "5px",
        "& td, & th": {
          border: "1px solid #cce5ff",
        },
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Next Prayer Start
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Next Jamat
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {nextStart.name == "Jum'ah" ? "Ẓuhr" : nextStart.name} -{" "}
              {dayjs(nextStart.start).format("hh:mm")}
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {nextJamat.name} - {dayjs(nextJamat.jamat).format("hh:mm")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <PrayerCountdown time={nextStart.start} />
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <PrayerCountdown time={nextJamat.jamat} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
