import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
    employeeForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    department: new FormControl()
  });
  submittedData: any[] = [];
  onSubmit(){
    this.submittedData.push(this.employeeForm.value);
    this.employeeForm.reset();
  }


}
