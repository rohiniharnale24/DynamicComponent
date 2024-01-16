import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.FormFunction();
  }
  FormFunction() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      empId: new FormControl('Es1234', [Validators.required]),
    });
  }
  OnSubmit() {
    console.log(this.signUpForm.value);
  }
  //file upload
  onFileUpload(event: any) {
    console.log('in file upload');

    if (event.target.length > 0) {
      let file = event.target.files[0];
      console.log(file);

      const formData = new FormData(); //we have created form data and append form here

      formData.append('file', file);
      console.log(formData);

      this.http.post('  http://localhost:3000/posts', file).subscribe((res) => {
        console.log('file uploaded', res);
      });
    }
  }
}
