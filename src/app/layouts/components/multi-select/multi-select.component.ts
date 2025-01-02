import { Component, ElementRef, Renderer2, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { AllCars, passenger } from 'src/app/Shared/interface/pass-form';
import { PassFormService } from 'src/app/Shared/service/pass-form.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Output() selectedItemsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  isSelectWrapVisible: boolean = false;
  selectedItems: string[] = [];
  selectname: string[] = [];

  keyword: string = '';
  passenger: passenger[] = []
  _passenger: passenger[] = []
  cars: AllCars[] = [{} as AllCars]
  // formData!: AllCars

  constructor(private elementRef: ElementRef, 
    private renderer: Renderer2,
    private pfSrv: PassFormService
  ) {
      this.renderer.listen('document', 'click', (event: Event) => this.onClickOutside(event));
      this.onDataPassenger()
  }

  async ngOnInit() {
    await this.emitDataPassenger();
    if (this.passenger) {
      Object.assign(this._passenger, this.passenger)
    }
  }

  async emitDataPassenger() {
    return await this.pfSrv.emitDataPassenger();
  }

  async onDataPassenger() {
    const item = await this.pfSrv.onDataPassenger();
    item.subscribe((data) => {
      if (data.status == 200) {
        console.log(data.msg)
        this.passenger = data.msg
        this._passenger = data.msg
    
          console.log("onDataPassenger",  this.passenger)
      }else{
        console.log("error")
      }
    })
  }

  toggleSelectWrap() {
    this.isSelectWrapVisible = !this.isSelectWrapVisible;    
  }

  //check ว่า click โดน select มั้ย ถ้าโดนจะเป็น dropdown
  onClickOutside(event: Event) {
    if (
      !this.elementRef.nativeElement.contains(event.target) &&
      (event.target as HTMLElement)?.className !== 'show-select' &&
      (event.target as HTMLElement)?.tagName !== 'LABEL'
    ) {
      this.isSelectWrapVisible = false;
    }
    
  }

  // toggleItem(itemValue: passenger) {

  //   const index = this.selectedItems.indexOf(itemValue.fullname);
  //   const id = this.selectname.indexOf(itemValue.user_id);

  //   if (index === -1) {
  //     this.selectedItems.push(itemValue.fullname);
  //     this.selectname.push(itemValue.user_id)
  //   } else {
  //     this.selectedItems.splice(index, 1);
  //     this.selectname.splice(id, 1);
  //   }
  //   this.selectedItemsChange.emit(this.selectname); // Emit the updated selectedItems array

  //   console.log(this.selectedItems)
  // }

  toggleItem(itemValue: passenger) {

    const index = this.selectedItems.indexOf(itemValue.fullname);
    const id = this.selectname.indexOf(itemValue.user_id);
    console.log("id", id)

    if (index === -1 && id === -1) {
      this.selectedItems.push(itemValue.fullname);
      this.selectname.push(itemValue.user_id)
    } else {
      this.selectedItems.splice(index, 1);
      this.selectname.splice(id, 1);
    }
    this.selectedItemsChange.emit(this.selectname); // Emit the updated selectedItems array
    console.log("this.selectname", this.selectname)
  }

  removeItem(itemValue: string) {
    const index = this.selectedItems.indexOf(itemValue);
    const id = this.selectname.indexOf(itemValue);
    if (index !== -1 || id !== -1) {
      this.selectedItems.splice(index, 1);
      this.selectname.splice(id, 1);
      // this.selectedItemsChange.emit(this.selectedItems); // Emit the updated selectedItems array
      this.selectedItemsChange.emit(this.selectname); // Emit the updated selectedItems array
    }
   
  }

  filter() {
    if (this.keyword != '') {
      Object.assign(this.passenger, this._passenger);
      this.passenger = this.passenger.filter((data) => {
        if (data.user_fname !== null) {
          return (
            data.user_fname.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
          );
        }
        return false;
      });
    }
    else {
      this.passenger = this._passenger;
    }
  }
}
