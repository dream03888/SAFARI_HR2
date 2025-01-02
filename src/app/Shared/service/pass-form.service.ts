import { Injectable } from '@angular/core';
import { ResponseData } from '../interface/response-data';
import { SocketSupply } from 'src/app/app.module';
import { AllCars, epfLocation, passFormTRansaction } from '../interface/pass-form';

@Injectable({
  providedIn: 'root'
})
export class PassFormService {

  constructor(private socket: SocketSupply) { }


  //------get data site------------
  async emitDataSite() {
    return await this.socket.emit('get_data_site');
  }
  async onDataSite() {
    return this.socket.fromEvent<ResponseData>('return_data_site');
  }

  //------get all passenger------------
  async emitDataPassenger() {
    return await this.socket.emit('get_all_user_passenger');
  }
  async onDataPassenger() {
    return this.socket.fromEvent<ResponseData>('return_all_user_passenger');
  }


//------------get all car ----------
async emitDataCar() {
  return await this.socket.emit('get_all_car');
}
async onDataCar() {
  return this.socket.fromEvent<ResponseData>('return_get_all_car');
}

//------------ confirm data ----------
async confirmData( epfForm:passFormTRansaction, epfLo:epfLocation[], formData:AllCars ,  vehicle:boolean):Promise<ResponseData>{
  console.log(vehicle)
  await this.socket.emit('insert_data_transaction',(epfForm),(epfLo),(formData),(vehicle));
  return await this.socket.fromOneTimeEvent<ResponseData>('return_insert_data_transaction').then((response) => {
    return response
  })
}

//------------ get epf transaction ----------
async getEpfTran():Promise<ResponseData>{
  await this.socket.emit('get_epf_transaction');
  return await this.socket.fromOneTimeEvent<ResponseData>('return_get_epf_transaction').then((response) => {
    console.log(response,"sdddddddddddddddddd")
    return response
  })
  
}

//------------ get epf detail ----------
async getEpfDetail(epf_id:number):Promise<ResponseData>{
  await this.socket.emit('get_epf_detail',(epf_id));
  return await this.socket.fromOneTimeEvent<ResponseData>('return_get_epf_detail').then((response) => {
    return response
  })
}







}
