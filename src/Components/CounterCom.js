import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub } from "../actions/CounterAction";

function CounterCom() {
    const counters = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="Container">
            <h1>Counter: {counters}</h1>
            <button onClick={() => dispatch(add(1))}> Increase </button>{" "}
            <button onClick={() => dispatch(sub(1))}> Decrease </button>

        </div>
    );
}

export default CounterCom;
