import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import { Settings } from './Settings';

function App() {

    let [count, setCount] = useState(0)
    let [maxVal, setMaxVal] = useState(5)
    let [startVal, setStartVal] = useState(0)

    function incBut() {
        if (count <= maxVal) {
            setCount(++count)
        }
    }

    function resetBut() {
        setCount(count = startVal)
    }

    function setBut() {
        localStorage.setItem('startVal', startVal.toString())
        localStorage.setItem('maxtVal', maxVal.toString())
    }

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
