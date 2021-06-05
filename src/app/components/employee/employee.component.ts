import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  students : Student[];
  constructor() {
    this.students = [
      {
        name: 'Vamshi',
        id: '15r4',
        doj: new Date("2018-12-16"),
        year: 3
      },
      {
        name: 'Krishna',
        id: '16s5',
        doj: new Date("2019-11-15"),
        year: 3
      },
      {
        name: 'Honey',
        id: '17t3',
        doj: new Date("2020-10-12"),
        year: 3
      },
      {
        name: 'Vamshi',
        id: '15r4',
        doj: new Date("2018-12-16"),
        year: 3
      },
      {
        name: 'Krishna',
        id: '16s5',
        doj: new Date("2019-11-15"),
        year: 3
      },
      {
        name: 'Honey',
        id: '17t3',
        doj: new Date("2020-10-12"),
        year: 3
      }
    ]
   }

  ngOnInit(): void {
  }

}
