import { Patient } from "./Patient";
import { Visit } from "./Visit";

export interface Doctor {
	id: number;
	fname: string;
	lname: string;
	email: string;
	phone: string;
	dob: string;
	maxPatients: number;
	patients: Patient[];
	visits: Visit[];
}
