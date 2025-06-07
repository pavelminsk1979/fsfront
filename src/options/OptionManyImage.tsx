import React, {useState} from "react";
import axios from "axios";

export const OptionManyImage = () => {
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
            console.log('-----------------------------')
            console.log('aaaaaaaaaaa', file)
            console.log('-----------------------------')
            formData.append('deskription', `text${file.name}`);
        });


        try {
            const res = await axios.post('http://localhost:3010/api/v1/post', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            console.log('Файл успешно загружен!');
            console.log('УРЛ АДРЕС КАРТИНКИ', res.data)
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
}