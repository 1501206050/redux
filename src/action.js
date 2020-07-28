import {CHANGE_INPUT,ADD_LIST,MEI_TUAN} from './actionType'
 export const addListAction=(val)=>{
    return {
        type:CHANGE_INPUT,
        value:val
    }
}
export const changeValueAction=()=>{
    return {
        type:ADD_LIST
    }
}
export const getMTListAction=(data)=>{
    return {
        type:MEI_TUAN,
        value:data
    }
}