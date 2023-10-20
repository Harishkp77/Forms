import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {
  student: any = [];
  newStudent:any={};
  @ViewChild('myform') form!:NgForm;

  onSubmit() {
    this.newStudent = this.form.value;
    this.student.push(this.newStudent);
    console.log(this.student)
    this.form.resetForm();
    
  }
}
