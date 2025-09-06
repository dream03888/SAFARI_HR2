import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
 searchTerm = '';

  employees = [
    {
      name: 'สมชาย แสนดี',
      position: 'นักพัฒนาซอฟต์แวร์',
      department: 'ไอที',
      startDate: new Date('2021-06-15'),
      active: true,
    },
    {
      name: 'สุรีย์พร นานดี',
      position: 'นักบัญชี',
      department: 'บัญชี',
      startDate: new Date('2019-01-12'),
      active: false,
    },
    {
      name: 'วีระชาติ ใจตรง',
      position: 'ฝ่ายบุคคล',
      department: 'HR',
      startDate: new Date('2020-03-01'),
      active: true,
    },
  ];

  filteredEmployees() {
    return this.employees.filter((emp) =>
      emp.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      emp.position.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
