import {CHANGE_INPUT,ADD_LIST,MEI_TUAN} from '../actionType'
const defaultState ={
    inputValue:'',
    list:[],
    data:[]
}
const reducer = ( state=defaultState,action) =>{
    console.log(action);
    switch (action.type) {
        case CHANGE_INPUT:
          return Object.assign({}, state, {
            inputValue: action.value
          })
        case ADD_LIST:
          return Object.assign({}, state, {
            list: [
              ...state.list,
                state.inputValue 
            ],
            inputValue:''
          })
        
         case MEI_TUAN:
           return Object.assign({}, state, {
            data:[...action.value]
          })
        default:
          return state
      }



    // console.log(action);
    // if(action.type==CHANGE_INPUT){
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.inputValue=action.value
    //     return newState
    // }else if(action.type==ADD_LIST){
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.list.push(newState.inputValue)
    //     newState.inputValue=''
    //     return newState

    // }
    // return state
}

export default reducer 