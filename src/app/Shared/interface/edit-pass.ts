import { Time } from "@angular/common"
import { Site_name } from "./pass-list"

export interface Transaction {
    epf_back_date: Date
    epf_back_time: Time
    epf_go_date: Date
    epf_go_time: Time
    epf_id: number
    epf_state_id: number
    site_name: Site_name[]
    state_name: string

}