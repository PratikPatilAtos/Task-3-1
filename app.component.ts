import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student: any = {
    id: 22,
    name: 'Daniel Grant',
    gender: 'Male',
    fatherName: 'Steve Grant',
    motherName: 'Naomi Grant',
    dateOfBirth: '07.08.2016',
    religion: 'Islam',
    fatherOccupation: 'Graphic Designer',
    email: 'arabagrant@gmail.com',
    admissionDate: '07.08.2019',
    class: '2'
  };
}
