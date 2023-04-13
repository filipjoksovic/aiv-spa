import React, { useEffect } from "react";
import { DoctorService } from "../services/DoctorService";
import { PatientService } from "../services/PatientService";
import { Doctor } from "../../../models/Doctor";
import { Patient } from "../../../models/Patient";
import PatientDetailsComponent from "../components/patient-details/PatientDetailsComponent";
import DoctorDetailsComponent from "../components/doctor-details/DoctorDetailsComponent";

const PatientPickerPage = () => {
	const [doctors, setDoctors] = React.useState<Doctor[]>([]);
	const [patients, setPatients] = React.useState<Patient[]>([]);

	const [doctorDetails, setDoctorDetails] = React.useState<Doctor>(
		{} as Doctor
	);
	const [patientDetails, setPatientDetails] = React.useState<Patient>(
		{} as Patient
	);

	useEffect(() => {
		DoctorService.getDoctors().then((doctors) => {
			if (doctors.length > 0) {
				DoctorService.getDoctorDetails(doctors[0].id).then((doctor) => {
					console.log(doctor);
					setDoctorDetails(doctor);
				});
			}
			setDoctors(doctors);
		});

		PatientService.getPatients().then((patients) => {
			if (patients.length > 0) {
				PatientService.getPatientDetails(patients[0].id).then((patient) => {
					console.log(patient);

					setPatientDetails(patient);
				});
			}

			setPatients(patients);
		});
	}, []);

	const getDoctorDetails = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		DoctorService.getDoctorDetails(value).then((doctor) => {
			console.log(doctor);
			setDoctorDetails(doctor);
		});
	};
	const getPatientDetails = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		console.log(value);
		PatientService.getPatientDetails(value).then((patient) => {
			console.log(patient);

			setPatientDetails(patient);
		});
	};

	const selectDoctor = () => {
		PatientService.selectDoctor(patientDetails.id, doctorDetails.id).then(
			() => {
				alert("Request processed");
				setPatientDetails({ ...patientDetails, doctor: doctorDetails });
			}
		);
	};
	return (
		<div className='container'>
			<h1>Pick a doctor for a patient</h1>
			<DoctorDetailsComponent doctor={doctorDetails}></DoctorDetailsComponent>
			<PatientDetailsComponent
				patient={patientDetails}
			></PatientDetailsComponent>
			<div className='form-group'>
				<select className='form-control' onChange={getDoctorDetails}>
					{doctors.map((doctor) => (
						<option key={doctor.id} value={doctor.id}>
							{doctor.fname} {doctor.lname}
						</option>
					))}
				</select>
			</div>
			<div className='form-group'>
				<select className='form-control' onChange={getPatientDetails}>
					{patients.map((patient) => (
						<option key={patient.id} value={patient.id}>
							{patient.fname} {patient.lname}
						</option>
					))}
				</select>
			</div>
			<button className='btn btn-primary' onClick={selectDoctor}>
				Select doctor
			</button>
		</div>
	);
};

export default PatientPickerPage;
