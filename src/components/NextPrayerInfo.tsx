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
import { Prayer } from "../pages/JamiaCurrentPrayerTimesPage";

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
              {dayjs(nextStart.start, "HH:mm").format("hh:mm")}
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {nextJamat.name} -{" "}
              {dayjs(nextJamat.jamat, "HH:mm").format("hh:mm")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
