import { HttpService } from "./../http.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  add: string;

  constructor(
    public http: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
        Validators.email,
      ]),
      role: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.data != null) {
      this.form.setValue({
        name: this.data.name,
        email: this.data.email,
        role: this.data.role === "Analyst" ? 0 : 1,
      });
      this.add = "Edit ";
    } else {
      this.add = "Add ";
    }
  }

  onSubmit() {
    if (this.data) {
      this.http.updateEmployee(this.form.value, this.data._id).subscribe();
      //console.log("update Employee");
    } else {
      this.http.insertEmployee(this.form.value).subscribe();
      // console.log("Create Employee")
    }
  }
}
