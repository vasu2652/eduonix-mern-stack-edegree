import React, { useState } from 'react';
import { ActionsTypes as CounterActionTypes } from '../../store/actions/counter';
import { connect } from 'react-redux';
import { resetCounter } from '../../store/reducers/counter';

const Counter= (props)=>{
    const { value, username, increment, decrement, reset } = props;
    return (
        <div>
            <div>
                counter: {value} {username}
            </div>
            <button onClick={increment}>Increment(+)</button>
            <button onClick={decrement}>Decrement(-)-</button>
            <br/>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
/**
 * 
 * @param {*} state -> It Receives whole redux store as argument
 * @returns -> Subset of store which is later injected to the component as props.
 */
const mapStateToProps = (state)=>{
    return {
        value: state.counter.value,
        username: state.user.name
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        increment: ()=> dispatch({type: CounterActionTypes.increment}),
        decrement: ()=> dispatch({type: CounterActionTypes.decrement}),
        reset: ()=> dispatch(resetCounter(CounterActionTypes.reset))
    }
}
const connectToStore = connect(mapStateToProps,mapDispatchToProps);
export default connectToStore(Counter);