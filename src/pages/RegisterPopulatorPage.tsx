import { useState, ChangeEvent, FormEvent } from 'react';
import Layout from '../components/Layout';
import PageContent from '../components/PageContent';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

interface FormData {
	registerSpreadsheetId: string;
	dateToUpdate: string;
	attendanceFormSpreadsheetId: string;
	attendanceFormSheetName: string;
	absenceFormSpreadsheetId: string;
	absenceFormSheetName: string;
	absenceYearGroup: number | string;
	checkZoom: boolean;
}

const initialFormState: FormData = {
	registerSpreadsheetId: '',
	dateToUpdate: '',
	attendanceFormSpreadsheetId: '',
	attendanceFormSheetName: '',
	absenceFormSpreadsheetId: '',
	absenceFormSheetName: '',
	absenceYearGroup: 1,
	checkZoom: false,
};

const year1PresetData: Partial<FormData> = {
	registerSpreadsheetId: '1lqKgyTOB2NApYHQDP5zAIPrpWHUSMgp9FEBjs0xtikk',
	attendanceFormSpreadsheetId: '1nJD1WaFgfpvhqwqFniui7osghLMAJ4427y0_Ix0JIRk',
	attendanceFormSheetName: 'Form responses 1',
	absenceFormSpreadsheetId: '1jYO1DqlBFctTU5n5bJ6A-0GNnHr_xSG9t-rb_T4nFXQ',
	absenceFormSheetName: 'Form responses 1',
	absenceYearGroup: 1,
	checkZoom: true,
};

const year2PresetData: Partial<FormData> = {
	registerSpreadsheetId: '1veiXG43hAt2pZ497ZYTwt9urkC1oMAXrGGA9NKX9KVA',
	attendanceFormSpreadsheetId: '1eaCKwZSBesyGmPHZi0jDr7EjqjWrEeMLvdD2oFOwOeI',
	attendanceFormSheetName: 'Form responses 1',
	absenceFormSpreadsheetId: '1jYO1DqlBFctTU5n5bJ6A-0GNnHr_xSG9t-rb_T4nFXQ',
	absenceFormSheetName: 'Form responses 1',
	absenceYearGroup: 2,
	checkZoom: false,
};

function RegisterPopulatorPage() {
	const [form, setForm] = useState<FormData>(initialFormState);
	const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = event.target;
		setForm(prevForm => ({
			...prevForm,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handlePreset = (presetData: Partial<FormData>) => {
		setForm(prevForm => ({
			...prevForm,
			...presetData,
		}));
		setSubmissionStatus(null);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmissionStatus(null);

		if (!form.dateToUpdate.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
			setSubmissionStatus({ type: 'error', message: 'Please enter the date in DD/MM/YYYY format.' });
			return;
		}

		const dataToSubmit = {
			...form,
			absenceYearGroup: Number(form.absenceYearGroup),
		};

		try {
			setIsLoading(true);
			const response = await fetch('https://fly-register-populator.fly.dev/register-populator/populate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToSubmit),
			});

			if (!response.ok) {
				const errorResult = await response.json().catch(() => ({ message: 'An unknown error occurred.' }));
				throw new Error(`HTTP error ${response.status}: ${errorResult.message || 'Failed to submit data'}`);
			}

			const result = await response.json();
			setSubmissionStatus({ type: 'success', message: `Submitted successfully! Response: ${JSON.stringify(result)}` });
		} catch (err) {
			console.error('Error submitting form:', err);
			setSubmissionStatus({ type: 'error', message: `Error submitting form: Please contact Sa'ad for assistance` });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Layout title="Submit Populator Data">
			<PageContent>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						maxWidth: '750px',
						width: '100%',
						mx: 'auto',
						p: 3,
						border: '1px solid #ccc',
						borderRadius: '8px',
						boxShadow: 3,
						mt: 4,
						mb: 4,
					}}
				>
					<Typography variant="h5" component="h2" sx={{ textAlign: 'center', mb: 1 }}>
						Populator Data Form
					</Typography>

					{/* --- Preset Buttons --- */}
					<Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
						<Button
							variant="outlined"
							onClick={() => handlePreset(year1PresetData)}
						>
							Year 1 Preset
						</Button>
						<Button
							variant="outlined"
							onClick={() => handlePreset(year2PresetData)}
						>
							Year 2 Preset
						</Button>
					</Stack>
					{/* --- End of Preset Buttons --- */}

					<TextField
						name="registerSpreadsheetId"
						value={form.registerSpreadsheetId}
						onChange={handleChange}
						label="Register Spreadsheet ID"
						variant="outlined"
						fullWidth
						required
					/>
					<TextField
						name="dateToUpdate"
						value={form.dateToUpdate}
						onChange={handleChange}
						label="Date to Update (DD/MM/YYYY)"
						placeholder="DD/MM/YYYY"
						variant="outlined"
						fullWidth
						required
					/>
					<TextField
						name="attendanceFormSpreadsheetId"
						value={form.attendanceFormSpreadsheetId}
						onChange={handleChange}
						label="Attendance Spreadsheet ID"
						variant="outlined"
						fullWidth
						required
					/>
					<TextField
						name="attendanceFormSheetName"
						value={form.attendanceFormSheetName}
						onChange={handleChange}
						label="Attendance Sheet Name"
						variant="outlined"
						fullWidth
						required
					/>
					<TextField
						name="absenceFormSpreadsheetId"
						value={form.absenceFormSpreadsheetId}
						onChange={handleChange}
						label="Absence Spreadsheet ID"
						variant="outlined"
						fullWidth
						required
					/>
					<TextField
						name="absenceFormSheetName"
						value={form.absenceFormSheetName}
						onChange={handleChange}
						label="Absence Sheet Name"
						variant="outlined"
						fullWidth
						required
					/>
					<TextField
						name="absenceYearGroup"
						type="number"
						value={form.absenceYearGroup}
						onChange={handleChange}
						label="Absence Year Group"
						variant="outlined"
						fullWidth
						required
					/>
					<FormControlLabel
						control={
							<Checkbox
								name="checkZoom"
								checked={form.checkZoom}
								onChange={handleChange}
								color="primary"
							/>
						}
						label="Check Zoom"
					/>

					{isLoading && (
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
							<CircularProgress sx={{ mb: 2 }} size={40} />
							<Typography variant="body1" textAlign="center">
								Processing your request...
								<br />
								The server might be waking up. Please wait.
							</Typography>
						</Box>
					)}

					{submissionStatus && !isLoading && (
						<Alert severity={submissionStatus.type} sx={{ mb: 2 }}>
							{submissionStatus.message}
						</Alert>
					)}
					<Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							size="large"
							disabled={isLoading}
							startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
						>
							{isLoading ? 'Submitting...' : 'Submit'}
						</Button>
					</Box>
				</Box>
			</PageContent>
		</Layout>
	);
}

export default RegisterPopulatorPage;