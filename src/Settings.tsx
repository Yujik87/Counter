import React from 'react';
import {SetFormBlock} from "./SetFormBlock";
import {SetButtonsBlock} from "./SetButtonsBlock";

export type SettingsPropsType = {
    set?: () => void | undefined
}


export function Settings (props: SettingsPropsType) {
    return (
        <div>
            <SetFormBlock />
            <SetButtonsBlock
                set={props.set}
            />
        </div>
    )
}