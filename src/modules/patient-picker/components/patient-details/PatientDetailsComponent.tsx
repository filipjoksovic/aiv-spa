import React from "react";
import { Patient } from "../../../../models/Patient";

export interface IPatientDetailsComponentProps {
	patient: Patient;
}

const PatientDetailsComponent = (props: IPatientDetailsComponentProps) => {
	const { patient } = props;
	return (
		<div className='container'>
			<h3>Patient details</h3>
			<p>{patient.fname}</p>
			<p>{patient.lname}</p>
			<p>{patient.dob}</p>
			<p>{patient.phone}</p>
			<p>{patient.email}</p>
			<p>{patient.notes}</p>
			<p>
				{patient.doctor?.fname || "No"} {patient.doctor?.lname || "doctor"}
			</p>
		</div>
	);
};

export default PatientDetailsComponent;
