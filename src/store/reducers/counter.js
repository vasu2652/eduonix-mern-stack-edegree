import { ActionsTypes as CounterActionTypes } from '../actions/counter'
const initialState = {
    value: 0
};

export const resetCounter = (type) => (dispatch, getState)=>{
    const state = getState();
    if(type===CounterActionTypes.reset){
        setTimeout(()=>{
            dispatch({
                type: CounterActionTypes.reset
            })
        },5000)
    }
}
/**
 * action -> type , payload
 */
//Redux takes the current state and the action performed and createsNewState
//Reducer will get two arguments 1.CurrentState 2. Action 

const CounterReducer= (state=initialState, action)=>{
    console.log(action,"CounterReducer")
    switch(action.type){
        case CounterActionTypes.increment:{
            return {
                ...state,
                value: state.value + 1
            }
        }
        case CounterActionTypes.decrement:{
            return {
                ...state,
                value : state.value - 1
            }
        }
        case CounterActionTypes.reset:{
            return {
                ...state,
                value : 0
            }
        }
        default:{
            return state;
        }
    }
}
export default CounterReducer;
