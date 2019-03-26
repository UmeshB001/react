import React, { Component } from 'react';
import { createStore } from 'redux';

class Redux extends Component {

    // redux ==> 4 setStep;
    // step 1.Store ==> (reducer ,state) => Create a Store
    // step 2.Reducer ==> (state,action) => Create a Reducer => Agent => what state current is? and what action do you need to take
    // step 3.Subscribe => getting current state; => 
    // step 4.Dispatch => What Action you need to Take

    render() {

        //step 2 Reducer : state and Action

        const reducer = function (state, action) {
            switch (action.type) {
                case "Attack":
                    return action.payload
                case "GreenAttack":
                    return action.payload
                default:
                    return state
            }
            // if (action.type === "Attack") {
            //     return action.payload
            // }
            // if (action.type === "GreenAttack") {
            //     return action.payload
            // }
            // return state;
        }

        //step 1 Store: reducer and state

        const store = createStore(reducer, "Peace");

        //step 3 Subscribe: 
        store.subscribe(() => {
            console.log("Store is Now", store.getState());
        })

        //step 4 Dispatch Action

        store.dispatch({ type: "Attack", payload: "Iron Man" })
        store.dispatch({ type: "GreenAttack", payload: "Hulk" })

        return (
            <div>
                test
            </div>
        );
    }

}
export default Redux;