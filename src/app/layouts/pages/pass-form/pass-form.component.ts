import { Component } from '@angular/core';
import { Location, Time } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationModalComponent } from './location-modal/location-modal.component';
import Swal from 'sweetalert2';
import { AllCars, epfLocation, passenger, passFormTRansaction, site } from 'src/app/Shared/interface/pass-form';
import { PassFormService } from 'src/app/Shared/service/pass-form.service';

@Component({
  selector: 'app-pass-form',
  templateUrl: './pass-form.component.html',
  styleUrls: ['./pass-form.component.scss']
})
export class PassFormComponent {

  epfForm: passFormTRansaction = {} as passFormTRansaction
  epfLo: epfLocation[] = [{} as epfLocation]
  siteData: site[] = [{} as site]
  pas: passenger[] = [{} as passenger]
  cars: AllCars[] = {} as AllCars[]


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
  userId: string ='2330';

  alert!: number;
  formData!: AllCars
  show = true;

  noHows!: number
  locates: string[] = []
  kuy!: number[]
  addPas: passenger = {} as passenger;

  selectnames: string[] = [];

  constructor(private location: Location,
    private modalSrv: NgbModal,
    private pfSrv: PassFormService
  ) {
    this.onDataSite()
    this.onDataCars()
  }

  async ngOnInit() {
    await this.emitDataSite();
    await this.emitDataCar();
    this.epfLo[0].site_id = null
    this.epfForm.user_id = parseInt(this.userId)
  }

  async emitDataSite() {
    return await this.pfSrv.emitDataSite();

  }

  async emitDataCar() {
    return await this.pfSrv.emitDataCar();

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
    const newItem = {} as epfLocation
    newItem.go_date = null
    newItem.go_time = null
    newItem.leave_date = null
    newItem.leave_time = null
    newItem.site_id = null
    newItem.work_des = ''
    newItem.remark = ''

    this.epfLo.push(newItem);
    console.log(this.epfLo)
  }

  removeLocation(index: number) {
    this.epfLo.splice(index, 1);
  }

  showSuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'สำเร็จ!',
      text: 'บันทึกข้อมูลสำเร็จ.',
      confirmButtonText: 'ตกลง'
    });
  }

  goBack() {
    this.location.back();
  }

  handleSelectedItemsChange(selectname: string[]) {
    const selectedIds = selectname.map(id => parseInt(id));
    this.formData.psg = this.formData.psg?.filter(userId => selectedIds.includes(userId));

    selectedIds.forEach(userId => {
      if (!this.formData.psg?.includes(userId)) {
        this.formData.psg?.push(userId);
      }
    });
    // console.log(this.formData.psg, "this.formData.psg")
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
    console.log("this.epfForm", this.epfForm)
    console.log("this.epfLo",this.epfLo)
    console.log("this.formData",this.formData)
    console.log("car request",this.isChecked)
    console.log("userid",this.epfForm.user_id)
    // console.log(this.formData.psg! , "this.formData.psg")

    //check ข้อมูลว่าใน locates มีตัวไหนสักตัวมั้ยที่เป็นไปตามเงื่อนไข ถ้ามี = return ค่าเป็น true   
    const checkdata = this.epfLo.some(item =>  !item.go_date || !item.go_time || !item.site_id || !item.work_des || (!item.remark && item.site_id == 0) 
                                      || !this.epfForm.epf_go_date || !this.epfForm.epf_go_time || this.epfForm.epf_back_date < item.go_date || this.epfForm.epf_back_date < (item.leave_date!)
                                      || item.go_date > (item.leave_date!) || ((item.leave_date!) === item.go_date)&&((item.leave_time!)<=(item.go_time))
                                      ||item.go_date < this.epfForm.epf_go_date || ((item.go_date === this.epfForm.epf_go_date)&&((item.go_time)<(this.epfForm.epf_go_time))));
    // const checkdata = this.epfLo.some(item =>  !item.go_date );
                                      
    // console.log(this.epfLo.some(item => (item.leave_date!) < this.epfForm.back_date ))
    console.log(this.epfForm.epf_go_date)
    // || this.epfForm.epf_go_date > this.epfForm.epf_back_date || ((this.epfForm.epf_go_date === this.epfForm.epf_back_date) && (this.epfForm.epf_go_time >= this.epfForm.epf_back_time))
    if (checkdata == true || this.epfForm.epf_go_date > this.epfForm.epf_back_date || ((this.epfForm.epf_go_date === this.epfForm.epf_back_date) && (this.epfForm.epf_go_time >= this.epfForm.epf_back_time))) {
      this.alertMessage = 'กรุณาตรวจสอบข้อมูลให้ถูกต้อง';
      this.isWarningAlertVisible = true;
      this.isAnimating = false;
    } else {
      // console.log("else")
      if (this.isChecked == true) {
        console.log("car request")
        // this.formData.car_id === null || !this.formData.start_maileage || !this.formData.end_maileage || (this.formData.start_maileage >= this.formData.end_maileage) || !this.formData.ezpass_cash 
        if (this.formData.car_id === null || !this.formData.start_maileage) {
          this.alertMessage = 'Enter all information';
          this.isWarningAlertVisible = true;
          this.isAnimating = false;
          // return
        } else {
          // this.pfSrv.confirmData(this.epfForm,this.epfLo,this.formData,this.isChecked).then(async (response) => {
          //   console.log(response.status)
          //   console.log(this.isChecked)
          //   if(response.status == 200) {
          //     this.alertMessage = 'Saved successfully';
          //     this.isSuccessAlertVisible = true;
          //     this.isAnimating = false;
          //   }else{
          //     this.alertMessage = 'API error';
          //     this.isWarningAlertVisible = true;
          //     this.isAnimating = false;
          //   }
          //   await this.ngOnInit()
          // })
          console.log("save")

        }
      } else {
        // this.pfSrv.confirmData(this.epfForm,this.epfLo,this.formData,this.isChecked).then(async (response) => {
        //   console.log(response.status)
        //   console.log(this.isChecked)
        //   if(response.status == 200) {
        //     this.alertMessage = 'Saved successfully';
        //     this.isSuccessAlertVisible = true;
        //     this.isAnimating = false;
        //   }else{
        //     this.alertMessage = 'API error';
        //     this.isWarningAlertVisible = true;
        //     this.isAnimating = false;
        //   }
        //   await this.ngOnInit()
        // })
        console.log("save")

      }

    }

  }

  // async confirmData(vehicle: boolean) {
  //   this.pfSrv.confirmData(vehicle).then(async (response) => {
  //     console.log(response)
  //     await this.ngOnInit()
  //   })
  // }

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

  // onClickAdd() {
  //   this.clickAdd == true;
  // }


}
