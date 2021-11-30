import React from "react";
import {PropsType} from "./Counter";


export function DisplayBlock (props: PropsType){
    return <div className={`${'disp'} ${props.count === 5 ? 'max' : ''}`}>{props.count}</div>
}