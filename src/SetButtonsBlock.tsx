import React from 'react';
import {SettingsPropsType} from "./Settings";



export function SetButtonsBlock(props: SettingsPropsType) {
    return (
        <div className='setButtons'>
            <button
            onClick={props.set}>
                Set
            </button>
        </div>
    )
}