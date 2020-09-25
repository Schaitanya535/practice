import { FormComponent } from "./../form/form.component";
import { HttpService } from "./../http.service";
import { Employee } from "./../models/employee";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
// import { timer } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpService, public dialog: MatDialog) {}

  rawData: any;
  filteredData: Employee[];
  employeeData: MatTableDataSource<Employee>;
  displayedColumns: string[] = ["name", "email", "role", "actions"];
  searchKey: string;
  // timer = timer(1000, 10000);
  ngOnInit(): void {
    this.getAllEmployees();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    if (this.searchKey !== null) {
      this.employeeData.filter = this.searchKey.trim().toLowerCase();
    }
  }

  // http request methods
  getAllEmployees() {
    this.http.getAllEmployees().subscribe((data) => {
      this.rawData = data.userList.filter((employee) => {
        return !employee.deleted;
      });
      // console.log(this.rawData);
      this.filteredData = this.rawData.map((item) => {
        if (item.role == 1) {
          item.role = "Manager";
        } else {
          if (item.role == 0) {
            item.role = "Analyst";
          }
        }
      });
      // console.log(this.filteredData)
      this.employeeData = new MatTableDataSource(this.rawData);
      this.employeeData.sort = this.sort;
      this.employeeData.paginator = this.paginator;
      this.applyFilter();
    });
  }

  createEmployeeDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      disableClose: true,
      // height: "250px",
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(result);
      this.getAllEmployees();
    });
  }

  openDialog(row) {
    // console.log(row);
    const dialogRef = this.dialog.open(FormComponent, {
      disableClose: true,
      data: row,
      // height: "250px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(result);
      this.getAllEmployees();
    });
  }
  /*
  deleteEmployeefromView(employee) {
    const id = this.rawData.findIndex((e) => {
      return e._id == employee._id;
    });
    if (id !== -1) {
      this.rawData.splice(id, 1);
      this.employeeData = new MatTableDataSource(this.rawData);
      this.employeeData.sort = this.sort;
      this.employeeData.paginator = this.paginator;
      this.applyFilter();
    }
  }
*/
  deleteEmployee(employee) {
    const _id = employee._id;
    this.http
      .deleteEmployee(_id)
      .toPromise()
      .then((data) => {
        // console.log(data);
        // this.deleteEmployeefromView(employee);
        this.getAllEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
