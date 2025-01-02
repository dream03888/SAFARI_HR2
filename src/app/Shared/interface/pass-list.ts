import { Time } from "@angular/common"

export interface passListTransaction {
    user_id: number,
    epf_go_date: Date,
    epf_go_time: Time,
    epf_back_date: Date,
    epf_back_time: Time,
    epf_state_id: number,
    epf_date: Date,
    epf_time: Time,
    epf_remark: string
    site_name: Site_name[],
    state_name: string,
    epf_id: number,
}

export interface Site_name{
    site_name: string,
    site_id: string,
}

export interface epfDetail {
    epf_id: number,
    epf_loc_go_date: string,
    epf_loc_go_time: string,
    epf_loc_leave_date: string,
    epf_loc_leave_time: string,
    site_id: number | null,
    epf_loc_work_des:string,
    epf_location:string,
    epf_loc_remark:string,
    site_name: string,
    epf_loc_id:string,
}

export interface allData {
    cardetail:carDetail[]
    user_id: number,
    epf_go_date: Date,
    epf_go_time: Time,
    epf_back_date: string,
    epf_back_time: Time,
    epf_state_id: number,
    epf_date: Date,
    epf_time: Time,
    epf_remark: string,
    locations: epfDetail[]
    epf_id: number,
    passengerdetail: psgDetail[] | null
}

export interface carDetail {
    car_brand: string,
    car_id: number,
    car_model: string,
    car_plate: string,
    car_year: string,
    epf_id: number,
    epf_loc_leave_time: string,
    site_id: number,
    trf_back_date:string,
    trf_back_mileage:string,
    trf_back_time:string,
    trf_date: string,
    trf_ezpass_cash:number,
    trf_go_date:string,
    trf_go_mileage:string,
    trf_go_time:string,
    trf_id: number,
    trf_state_id:number,
    trf_time:string,
    user_id:number
}

export interface psgDetail {
    epf_id: number,
    passenger_id: number,
    trf_id: number,
    user_fname:string,
    user_id:number,
    user_lname:string,
    user_pname: string,
}




