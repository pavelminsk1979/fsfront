import React from 'react';
import './App.css';
import {OptionWithChankes} from "./options/OptionWithChankes";
import {OptionSimple} from "./options/OptionSimple";
import {OptionManyImage} from "./options/OptionManyImage";
import {ElementDragAndDrop} from "./options/ElementDragAndDrop";

function App() {
    console.log('77777777777777777777777777')
    return (
        <>
            <OptionManyImage/>
            <h2>=========================</h2>
            <h2>=========================</h2>
            <h2>=========================</h2>
            <OptionSimple/>
            <h3>ТУТ БУДЕТ ВАРИАНТ ЗАГРУЗКИ КАРТИНОК по одной</h3>
            <div>И НА БЭКЕ ЭТО РАБОТА СО СТРИМАМИ</div>
            <div>=========================</div>
            <h3> НИЖЕ это тренировал загружать большие видосы чанками</h3>
            <OptionWithChankes/>
            <ElementDragAndDrop/>

        </>
    )

}

export default App;


// тут 2 варианта(в выйловую систему и не большой файл в яндексОблако)
/*import React from 'react';
import './App.css';

function App() {


    return (
        <>

            <form
                action="http://localhost:3010/image" //url бэкенда
                encType="multipart/form-data"          // определяет, как данные будут закодированы
                // перед отправкой
                /!*multipart/form-data:  Это значение используется, когда
            форма содержит файлы (например, при загрузке изображений
            Оно позволяет передавать как текстовые данные
            (например, имя), так и бинарные данные - например, файлы*!/
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

export default App;*/




