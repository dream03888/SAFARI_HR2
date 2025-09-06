import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-employee-schedule',
  templateUrl: './employee-schedule.component.html',
  styleUrls: ['./employee-schedule.component.scss']
})
export class EmployeeScheduleComponent {
  [x: string]: any;
  @ViewChild('detailModal', { static: true }) detailModal: any;

 employees = [
    {
      id: '5137',
      name: 'เด่นโชค อรรณพาธร',
      department: 'คอมพิวเตอร์',
      totalDays: 5,
      leaveQuota: 'VIEW',
      days: [
        { date: '1 ก.ย.', inTime: '07:40', outTime: '17:15', note: '' },
        { date: '2 ก.ย.', inTime: '07:31', outTime: '17:10', note: '' },
        { date: '3 ก.ย.', inTime: 'N/A', outTime: 'N/A', note: 'หยุด N' },
        // เพิ่มวันต่อ ๆ ไป...
      ],
    },
    // ...คนอื่น ๆ
  ];
    selectedEmployee: any = null;

  constructor(private modalService: NgbModal) {}

  viewDetail(emp: any) {
    this.selectedEmployee = emp;
    const modalRef = this.modalService.open(this.detailModal, { size: 'lg' });
  }
  
}
