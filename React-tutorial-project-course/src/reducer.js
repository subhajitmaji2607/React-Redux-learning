//reducer
//reducer - function that are use to update store
//two argument - state,action
//state -old state/state before update
//action - what happen/what update
//return update or old state

import { INCREASE,DECREASE,CLEAR_CART,REMOVE} from "./action";
const reducer = (state,action)=>{

    if(action.type === CLEAR_CART){
        return{...state,cart:[]}
    }

    if(action.type === INCREASE){
        console.log('i')
    }

    if(action.type === DECREASE){
        console.log('d')
    }

    if(action.type === REMOVE){
        // console.log(state)
        // console.log(action.payload.id)
        return{
            ...state,
            cart : state.cart.filter((item)=>item.id !== action.payload.id)
        }
    }
    //always always return the old state
    return state





    //Alternative Option
    // switch (action.type) {
    //     case CLEAR_CART:
    //         return{...state,cart:[]};
    //     default:
    //        return state;
    // }
}
export default reducer;