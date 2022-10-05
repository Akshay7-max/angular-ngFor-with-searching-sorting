import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';

  originalemployees: Employee[] = [
    new Employee(1, 'Ram', 4000),
    new Employee(2, 'Shyam', 5000),
    new Employee(3, 'Krishna', 6000),
    new Employee(4, 'Hari', 7000)
  ];

  employees: Employee[] = [];

  constructor() {
    this.employees = this.originalemployees;
  }

  str: string = '';
  sortcolumn = 'empid';
  order = 1;

  onSearchClick() {
    this.employees = this.originalemployees.filter((emp:any) => {
      return emp.empname.toLowerCase().indexOf(this.str.toLowerCase()) >= 0;
    });
  }

  onSortClick() {
    this.employees = this.originalemployees.sort((emp1:any, emp2:any) => {
      var n = 0;
      if (this.sortcolumn == 'empid') {
        return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;
      } else if (this.sortcolumn == 'empname') {
        return (
          emp1[this.sortcolumn].charCodeAt(0) -
          emp2[this.sortcolumn].charCodeAt(0)) *
          this.order
      } else {
        return (emp1[this.sortcolumn] - emp2[this.sortcolumn]) * this.order;
      }
    });
  }
}
