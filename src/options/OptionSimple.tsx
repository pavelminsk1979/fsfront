import React, {useState} from "react";
import axios from "axios";

export const OptionSimple = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('ФАЙЛ ПОПАДАЕТ В USESTATE')
        setFile(event.target.files?.[0] || null);
    };

    const handleOnClick = async () => {
        console.log('ИДЕТ ОТПРАВКА НА БЭК ФАЙЛА. ФАЙЛ ПРИСУТСТВУЕТ?', file)
        if (!file) {
            console.log('Файл не выбран!');
            return;
        }

        const formData = new FormData();
        // 'streamstream'  это как ключь :
        //  file   это значение, это сама картинка
        // так можно заполнять передаваемый на бэк обьект  formData
        formData.append('streamstream', file);
        formData.append('deskription', 'text,text,text');

        try {
            const res = await axios.post('http://localhost:3011/stream', formData);
            console.log('Файл успешно загружен!');
            console.log('УРЛ АДРЕС КАРТИНКИ', res)
        } catch (e) {
            console.log('Ошибка загрузки файла', e);
        }
    };

    return (
        <>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleOnClick}>Загрузить файл</button>
        </>
    );
};