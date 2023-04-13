export class DoctorService {
	public static async getDoctorDetails(id: string) {
		const response = await fetch(`${this.endpoint}/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	}
	static endpoint =
		"http://localhost:8080/hospital-1.0-SNAPSHOT/api/v1/doctors";

	public static async getDoctors() {
		const response = await fetch(this.endpoint + "/all?available=true", {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	}
}
