import {statusOrder} from "./interface";

const listStatus:Array<statusOrder> = [
    {name:"Đang chờ xác nhận",value:"wait_for_confirm"},
    {name:"Đã xác nhận",value:"confirmed"},
    {name:"Đang giao",value:"delivering"},
    {name:"Hoàn thành",value:"completed"},
    {name:"Đã hủy",value:"cancelled"}
]

const getListStatus = ()=>{
    return listStatus
}

const getNameStatusByValue = (value:string):string=>{
    const a = listStatus.find(x=>x.value==value)
    if(a){
        return a.name
    }
    return "not found"
}
export default {
    getListStatus,getNameStatusByValue
}