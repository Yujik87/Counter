import React from "react";
import {PropsType} from "./Counter";


export function ButtonBlock (props: PropsType){
    return <div className='disp'>
        <button
            disabled={props.count === 5}
            onClick={props.increase}
        >INC
        </button>
        <button
            disabled={props.count === 0}
            onClick={props.reset}
        >RESET
        </button>
    </div>
}