import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { passFormTRansaction } from 'src/app/Shared/interface/pass-form';
import { epfDetail, passListTransaction } from 'src/app/Shared/interface/pass-list';
import { PassFormService } from 'src/app/Shared/service/pass-form.service';

@Component({
  selector: 'app-pass-list',
  templateUrl: './pass-list.component.html',
  styleUrls: ['./pass-list.component.scss']
})
export class PassListComponent {
  // tableData = Array.from({ length: 5 }, (_, index) => ({
  //   no: index + 1,
  //   departureDate: '04/01/2016 09:00',
  //   returnDate: '03/01/2016 09:00',
  //   location: 'xxxx',
  //   status: '3'
  // }));

  passList:passListTransaction[] = [{} as passListTransaction]
  epfDetail: epfDetail = {} as epfDetail
  // epfDetail: passListTransaction = {} as passListTransaction


  isDeleteAlertVisible: boolean = false;
  isAnimating: boolean = false;
  rowToDelete: any = null;
  movedData = []

  constructor(private router: Router,
    private pfSrv: PassFormService
  ) {
    this.onDataList()
  }

  async onDataList() {
    const data = await this.pfSrv.getEpfTran();
    this.passList = data.msg
    console.log(this.passList);
  }

  async onClickView(epf_id:number){
    this.onDataView(epf_id)
    console.log("thissss", epf_id);
  }

  async onDataView(epf_id:number) {
    const data = await this.pfSrv.getEpfDetail(epf_id);
    if(data.status == 200){
      this.epfDetail = data.msg
      await this.router.navigate(['/pass-view'], {
        // queryParams: { item: JSON.stringify(this.epfDetail)}
        queryParams: { epf_id}

      });
    }else{
      console.log("ERROR")
    }
  }

  async onClickEdit(epf_id:number){
    this.onDataEdit(epf_id)
    console.log("thissss",epf_id);
  }

  async onDataEdit(epf_id:number) {
    const data = await this.pfSrv.getEpfDetail(epf_id);
    if(data.status == 200){
      this.epfDetail = data.msg
      console.log(data.msg)
      await this.router.navigate(['/edit-pass'], {
        queryParams: { epf_id}
      });
    }else{
      console.log("ERROR")
    }
  }

  onAppClick(choice: string, row: any): void {
    if (choice === 'delete') {
      this.isDeleteAlertVisible = true;
      this.isAnimating = false;   
      this.rowToDelete = row;
    }
  }

  closeDeleteAlert(): void {
    this.isDeleteAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300); 
  }

  deleteRow(): void {
    this.closeDeleteAlert();
  }

  
  
}
