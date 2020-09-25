import { Employee } from "./models/employee";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}
  baseURL: string = "http://localhost:3000/";
  userList;
  getAllEmployees(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }
  insertEmployee(formData) {
    return this.http.post<any>(this.baseURL, formData);
  }
  deleteEmployee(id: string) {
    const url = this.baseURL + id;
    return this.http.patch<any>(url, [{ propName: "deleted", value: "true" }]);
  }
  getEmployee(id: string) {
    const url = this.baseURL + id;
    return this.http.get<any>(url);
  }

  updateEmployee(employee: Employee, id) {
    const url = this.baseURL + id;
    const params = [
      { propName: "name", value: employee.name },
      { propName: "email", value: employee.email },
      { propName: "role", value: employee.role },
    ];
    return this.http.patch<any>(url, params);
  }
}
