import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material';
import { PrayerTimes } from '../pages/JamiaCurrentPrayerTimesPage';

interface PrayerTimeTableProps {
	times?: PrayerTimes;
}

const PrayerTimeTable = ({ times }: PrayerTimeTableProps) => {
	if (!times) {
		return <Box sx={{textAlign: "center"}}>No times found</Box>;
	}

	const rows = [
		{ name: "Fajr", start: times.fajrStart, jamaat: times.fajrJamat },
		{ name: "Sunrise", start: times.sunrise, jamaat: "-" },
		{ name: "Zuhr", start: times.dhuhrStart, jamaat: times.dhuhrJamat },
		{ name: "'Asr", start: times.asrStart, jamaat: times.asrJamat },
		{ name: "Maghrib", start: "-", jamaat: times.maghribJamat },
		{ name: "'Isha", start: times.ishaStart, jamaat: times.ishaJamat },
	];

	return (
		<TableContainer component={Paper} sx={{ maxWidth: 400, margin: "auto" }}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell sx={{ fontWeight: "bold" }}> </TableCell>
										<TableCell sx={{ fontWeight: "bold" }}>Start</TableCell>
										<TableCell sx={{ fontWeight: "bold" }}>Jamaat</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row: any, i: number) => (
										<TableRow key={i}>
											<TableCell>{row.name}</TableCell>
											<TableCell>{row.start.slice(0, 5)}</TableCell>
											<TableCell>{row.jamaat.slice(0, 5)}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
	);
}

export default PrayerTimeTable;