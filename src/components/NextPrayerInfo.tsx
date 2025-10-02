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

interface NextPrayerInfoProps {
  nextStart?: string;
  nextJamat?: string;
}

export const NextPrayerInfo: React.FC<NextPrayerInfoProps> = ({
  nextStart,
  nextJamat,
}) => {
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
              Next Prayer
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
              {dayjs(nextStart, "HH:mm").format("hh:mm")}
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {dayjs(nextJamat, "HH:mm").format("hh:mm")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
