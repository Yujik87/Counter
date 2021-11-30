import React from 'react';
import './App.css';
import {DisplayBlock} from './DisplayBlock';
import {ButtonBlock} from "./ButtonBlock";

export type PropsType = {
    count: number
    increase?: () => void
    reset?: () => void
}

export function Counter(props: PropsType) {

    return (
        <div>
            <DisplayBlock
                count={props.count}
            />
            <ButtonBlock
                count={props.count}
                increase={props.increase}
                reset={props.reset}
            />
        </div>
    )
}