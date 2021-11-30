import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import { Settings } from './Settings';

function App() {

    let [count, setCount] = useState(0)

    function incBut() {
        if (count <= 5) {
            setCount(++count)
        }
    }

    function resetBut() {
        setCount(count = 0)
    }

    function setBut

    return (
        <div className="App">
            <Counter
                count={count}
                increase={incBut}
                reset={resetBut}
            />
            <Settings
                set={setBut}
            />
        </div>
    );
}

export default App;
