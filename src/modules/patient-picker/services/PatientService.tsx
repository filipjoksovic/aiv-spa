import { Patient } from "../../../models/Patient";

export class PatientService {
	public static async selectDoctor(id: number, id1: number) {
		const response = await fetch(`${this.endpoint}/addDoctor`, {
			method: "POST",
			body: JSON.stringify({
				doctorId: id1,
				patientId: id,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	}
	public static async getPatientDetails(id: string): Promise<Patient> {
		const response = await fetch(`${this.endpoint}/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	}
	static endpoint =
		"http://localhost:8080/hospital-1.0-SNAPSHOT/api/v1/patients";

	public static async getPatients() {
		const response = await fetch(this.endpoint + "/all?available=true", {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	}
}
