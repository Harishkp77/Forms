import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {
  newStudent:any = {};
  student:any=[];

  onSubmit(){
    this.student.push(this.newStudent);
    this.newStudent={};
    console.log(this.student);
  }

}