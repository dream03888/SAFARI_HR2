import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Location } from '@angular/common';
import { AllCars, epfLocation, passenger, passFormTRansaction, site } from 'src/app/Shared/interface/pass-form';
import { PassFormService } from 'src/app/Shared/service/pass-form.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { allData, epfDetail, passListTransaction } from 'src/app/Shared/interface/pass-list';
import { Transaction } from 'src/app/Shared/interface/edit-pass';
import { LocationModalComponent } from '../pass-form/location-modal/location-modal.component';

@Component({
  selector: 'app-edit-pass',
  templateUrl: './edit-pass.component.html',
  styleUrls: ['./edit-pass.component.scss'],
})
export class EditPassComponent {
  @Input() itemData!: passListTransaction

  epfForm: passFormTRansaction = {} as passFormTRansaction
  epfLo: epfLocation[] = [{} as epfLocation]
  siteData: site[] = [{} as site]
  pas: passenger[] = [{} as passenger]
  cars: AllCars[] = {} as AllCars[]
  allInfo: allData[] = [{} as allData]
  epfDetail: epfDetail[] = [{} as epfDetail]
  trans: Transaction = {} as Transaction

  load = { epfForm: false, siteData: false, epfLo: false, cars: false }

  selectname: string[] = [];
  startMaileage: string = '';
  endMaileage: string = '';
  easyPass: string = '';
  selectedLocation = '';
  selectedCar = '';
  isChecked = false;
  clickAdd = false;
  isWarningAlertVisible: boolean = false;
  isSuccessAlertVisible: boolean = false;
  isAnimating: boolean = false;
  alertMessage: string = '';
  departureDate: string = '';
  departureTime: string = '';
  returnDate: string = '';
  returnTime: string = '';
  purpose: string = '';
  other: string = '';
  userId: string = '2330';
  // addLo = false;

  alert!: number;
  formData!: AllCars
  formDataDT!: Transaction
  Data!: epfLocation
  show = true;

  noHows!: number
  locates: string[] = []
  kuy!: number[]
  addPas: passenger = {} as passenger;

  selectnames: string[] = [];

  constructor(private location: Location,
    private modalSrv: NgbModal,
    private pfSrv: PassFormService,
    private activatedRoute: ActivatedRoute) {

    this.onDataSite()
    this.onDataCars()
    
  }

  goBack() {
    this.location.back();
  }

  async ngOnInit() {
    await this.emitDataSite();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params.epf_id)
       this.onDataEdit(params.epf_id)

    })

  }

  async onDataEdit(epf_id:number) {
    const data = await this.pfSrv.getEpfDetail(epf_id);
    if(data.status == 200){
      this.allInfo = data.msg
      console.log(data.msg)
      
      //แปลงเวลา
      if (this.allInfo[0].epf_back_date) {
      const date = new Date(this.allInfo[0].epf_back_date);
      this.allInfo[0].epf_back_date = date.toISOString().split('T')[0];
    }
    }else{
      console.log("ERROR")
    }
  }

  async emitDataSite() {
    return await this.pfSrv.emitDataSite();

  }

  async emitDataCar() {
    return await this.pfSrv.emitDataCar();

  }

  setFormDataDT(data: Transaction) {
    if (!data) return

    this.formDataDT = {
      epf_go_date: data.epf_go_date,
      epf_go_time: data.epf_go_time,
      epf_back_date: data.epf_back_date,
      epf_back_time: data.epf_back_time,
      epf_state_id: data.epf_state_id,
      site_name: data.site_name,
      state_name: data.state_name,
      epf_id: data.epf_id,
    }
    console.log(this.formDataDT,"aaaaaaaaaaaaaa")

  }

  async onDataSite() {
    const data = await this.pfSrv.onDataSite();
    data.subscribe((items) => {
      if (items.status !== 200) {
        this.load.siteData = true;
        console.log("error")
      } else {
        this.siteData = items.msg;
        console.log("items.msg", items.msg)
        this.load.siteData = true;
        console.log("mee data jaa")
      }
    })
  }

  async onDataCars() {
    const item = await this.pfSrv.onDataCar();
    item.subscribe((data) => {
      if (data.status == 200) {
        this.cars = data.msg
        console.log("CARS", this.cars)
      } else {
        console.log("error")
      }
    })
  }

  setFormData() {
    this.formData = {
      car_id: null,
      car_brand: "",
      car_model: "",
      car_year: "",
      car_plate: "",
      ezpass_no: "",
      ezpass_cash: null,
      start_maileage: null,
      end_maileage: null,
      psg: [],
      user_id: 1234
    }

  }

  addLocation() {
    const newItem = {} as epfDetail
    newItem.epf_id = this.allInfo[0].epf_id,
    newItem.epf_loc_go_date =  '',
    newItem.epf_loc_go_time =  '',
    newItem.epf_loc_leave_date = '',
    newItem.epf_loc_leave_time = '',
    newItem.site_id = null,
    newItem.epf_loc_work_des = '',
    newItem.epf_location = '',
    newItem.epf_loc_remark= '',
    newItem.site_name = '',
    newItem.epf_loc_id = '',

    this.allInfo[0].locations.push(newItem);
    console.log(this.allInfo)
  }


  removeLocation(index: number) {
    if(this.allInfo[0].locations.length > 1){
      this.allInfo[0].locations.splice(index, 1);
    }else{
      console.log("ไม่ให้ลบจ้า")
    }
    
  }

  updateLo(){
    console.log("modal open")
  }

  locModal() {
    console.log("CartModal open")
    // this.router.navigate(['/withdraw-cart']);
    const modalRef = this.modalSrv.open(LocationModalComponent, { size: 'lg' })
    // console.log(data)
  }



  // insertDetail(){
  //   const upd = {} as allData
  //   // upd.user_id = ,
  //   upd.epf_back_date = this.allInfo[0].epf_back_date,
  //   upd.epf_back_time =  this.allInfo[0].epf_back_time,


  //   this.allInfo.push(upd);
  // }

  handleSelectedItemsChange(selectname: string[]) {
    const selectedIds = selectname.map(id => parseInt(id));
    this.formData.psg = this.formData.psg?.filter(userId => selectedIds.includes(userId));

    selectedIds.forEach(userId => {
      if (!this.formData.psg?.includes(userId)) {
        this.formData.psg?.push(userId);
      }
    });
    console.log(this.formData.psg, "this.formData.psg")
  }

  onCheckVehicle() {
    console.log(this.isChecked)
    if (this.isChecked == true) {
      this.setFormData();
      console.log("checked", this.formData)
      console.log("car id", this.formData.car_id)
    } else {
      return
    }

  }

  onAppClick(): void {
    if(this.allInfo[0].cardetail[0].trf_go_mileage >= this.allInfo[0].cardetail[0].trf_back_mileage){
    console.log("error")
    }
    console.log("cf no cc")
    console.log(this.allInfo)
  }

  closeWarningAlert(): void {
    this.isWarningAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }

  closeSuccessAlert(): void {
    this.isSuccessAlertVisible = false;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }

}
