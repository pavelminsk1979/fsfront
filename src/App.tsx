import React from 'react';
import './App.css';

function App() {


    return (

            <form
                action="http://localhost:3010/image"
                  encType="multipart/form-data"
                  method="POST">
                <input
                    type="text"
                    name="Имя и Фамилия"/>
                <input
                    type="file"
                    name="imageimage"
                    required/>
                <button>ЗАПРОС НА БЭК</button>
            </form>



    );
}

export default App;


/*
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


*/

