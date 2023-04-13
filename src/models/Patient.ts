import { Doctor } from "./Doctor";
import { Visit } from "./Visit";

export interface Patient {
	id: number;
	fname: string;
	lname: string;
	email: string;
	phone: string;
	dob: string;
	notes: string;
	doctor?: Doctor;
	visits?: Visit[];
}
