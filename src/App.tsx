import React from 'react';
import './App.css';

function App() {



    return (
        <>

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
                <button>ПОМЕСТИТЬ В ФАЙЛОВУЮ СИСТЕМУ</button>

            </form>

            <br/>
            <br/>
            <br/>
            <br/>

            <form
                action="http://localhost:3010/yandex"
                encType="multipart/form-data"
                method="POST">
                <input
                    type="text"
                    name="Имя и Фамилия"/>
                <input
                    type="file"
                    name="yandexyandex"
                    required/>
                <button>ПОМЕСТИТЬ В ЯНДЕКС ОБЛАКО</button>

            </form>


        </>


    )

}

export default App;




