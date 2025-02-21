import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [value, setValue] = useState('nothing')

    const handleOnClick = () => {
        axios.post('http://localhost:3010', {value})
            .then(res => {
                console.log(res.data)
                setValue(res.data);
            })
            .catch(error => {
                console.log(error.message)
                setValue(error.message);
            })
    }

    return (
        <div className="App">
            <div> HELLOY!</div>

            <button
                onClick={handleOnClick}
            > ЗАПРОС НА БЭК
            </button>
            <div>{value}</div>
        </div>

    );
}

export default App;



