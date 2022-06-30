import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { ApiService } from '../services/Api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent implements OnInit {
  data: Student;
  students: Student[];
  // data.name: string;

  // console.log("data name", data.name);
  // id: number;
  // studname: any;
  // age: any;
  //  address: any;

  constructor(
    public apiService: ApiService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.data = new Student();
  }

  ngOnInit() {
    console.log('data name', this.data.name);
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });
  }
}
