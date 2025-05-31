import React, {useState} from "react";
import axios from "axios";

export const OptionSimple = () => {
    const [files, setFiles] = useState<FileList | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files) {
            console.log('ФАЙЛ ПОПАДАЕТ В USESTATE')
            setFiles(event.target.files);
        }
    };
    console.log('files', files)
    const handleOnClick = async () => {
        console.log('ИДЕТ ОТПРАВКА НА БЭК ФАЙЛА. ФАЙЛ ПРИСУТСТВУЕТ?', files)
        if (!files || files.length === 0) {
            console.log('Файл не выбран!');
            return;
        }

        const formData = new FormData();

        // Добавляем каждый файл в formData
        Array.from(files).forEach((file) => {
            formData.append('files', file);
            formData.append('deskription', 'text,text,text');
        });


        try {
            const res = await axios.post('http://localhost:3010/stream', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            console.log('Файл успешно загружен!');
            console.log('УРЛ АДРЕС КАРТИНКИ', res)
        } catch (e) {
            console.log('Ошибка загрузки файла', e);
        }
    };

    return (
        <>
            <h3> ВЫБРАТЬ МОЖНО МНОГО файлОВ (до 10 штук по ТЗ ---при выборе файлов надо
                удерживать клавишу Ctrl )</h3>
            <input type="file" multiple onChange={handleFileChange}/>
            <button onClick={handleOnClick}>ОТПРАВИТЬ ВЫБРАНЫЕ ФАЙЛЫ НА БЭКЕНД
            </button>
        </>
    );
};