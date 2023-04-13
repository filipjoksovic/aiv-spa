import React from "react";
import { Doctor } from "../../../../models/Doctor";

export interface IDoctorDetailsComponentProps {
	doctor: Doctor;
}

const DoctorDetailsComponent = (props: IDoctorDetailsComponentProps) => {
	const { doctor } = props;
	return (
		<div className='container'>
			<h3>Doctor details</h3>
			<p>{doctor.fname}</p>
			<p>{doctor.lname}</p>
			<p>{doctor.dob}</p>
			<p>{doctor.phone}</p>
			<p>{doctor.email}</p>
			<p>
				{doctor.patients ? doctor.patients.length : 0} / {doctor.maxPatients}
			</p>
		</div>
	);
};

export default DoctorDetailsComponent;
