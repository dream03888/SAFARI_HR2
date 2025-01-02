import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allData, epfDetail, passListTransaction } from 'src/app/Shared/interface/pass-list';
import { PassFormService } from 'src/app/Shared/service/pass-form.service';

@Component({
  selector: 'app-pass-view',
  templateUrl: './pass-view.component.html',
  styleUrls: ['./pass-view.component.scss']
})
export class PassViewComponent {
  isDeleteAlertVisible: boolean = false;
  isAnimating: boolean = false;

  epfDetails: epfDetail[] = [{} as epfDetail]
  allInfo: allData[] = [{} as allData]
  // epfDetails: epfDetail = {} as epfDetail

  constructor(private activatedRoute: ActivatedRoute,
    private pfSrv: PassFormService
  ) {
  
  }

  async ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((params: any) => {
    //   const items = JSON.parse(params.item)
    //   console.log(items)
    //   for (let i = 0; i < items.length; i++) {
    //     this.allInfo[i] = items[i]
    //     console.log(this.allInfo)
    //   }
    //   console.log(this.allInfo, "items")
    // })
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params.epf_id)
       this.onDataView(params.epf_id)
    })
  }

  async onDataView(epf_id:number) {
    const data = await this.pfSrv.getEpfDetail(epf_id);
    if(data.status == 200){
      this.allInfo = data.msg
      console.log(data.msg)
    }else{
      console.log("ERROR")
    }
  }

  formatTime(time: string): string {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // เปลี่ยน 0 เป็น 12 สำหรับเวลาเที่ยงคืน
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
  }

  // async onDataView(epf_id: number) {
  //   const data = await this.pfSrv.getEpfDetail(epf_id);
  //   this.allInfo = data.msg
  //   console.log(data.msg)
  // }


  // onAppClick(choice: string, event: MouseEvent): void {
  //   if (choice === 'delete') {
  //     this.isDeleteAlertVisible = true;
  //     this.isAnimating = false;   
  //   }
  // }

  closeDeleteAlert(): void {
    this.isDeleteAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }

  deleteRow(): void {
    // this.tableData = this.tableData.filter(row => row !== this.rowToDelete);
    this.closeDeleteAlert();
  }

  onAppClick() {
    console.log("dddddddd")
  }



}
