import { Time } from "@angular/common"

export interface passFormTRansaction {
    user_id: number
    epf_go_date: Date
    epf_go_time: Time
    epf_back_date: Date
    epf_back_time: Time
    epf_state_id: number
    epf_date: Date
    epf_time: Time
    epf_remark: string
    epf_location: epfLocation[]

}

export interface epfLocation {
    go_date: Date | null
    go_time: Time | null
    leave_date: Date | null
    leave_time: Time | null
    site_id: number | null
    work_des: string
    remark: string
}

export interface site {
    announcing_date: null
    customer_req_date: string | null
    hand_over: string | null
    job_site_no: string | null
    promise_time: null | null
    province: string | null
    sign_contact_date: string | null
    site_id: number
    site_name: string
    site_name_eng: string
    site_prefix: string
}

export interface AllCars {
    car_id: number | null
    car_brand: string
    car_model: string
    car_year: string
    car_plate: string
    ezpass_no: string
    ezpass_cash: number | null
    start_maileage: number | null | undefined
    end_maileage: number | null
    user_id:number
    psg:number[] | null | undefined
}


export interface passenger {
    department_id: number
    employee_code: string
    position_id: number
    start_date: string
    user_fname: string
    user_id: string 
    user_lname: string
    user_pname: string
    user_profile_img: string
    user_tel: string
    fullname: string
    user_id1: string[]
}


