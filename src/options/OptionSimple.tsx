import React, { useState } from "react";
import axios from "axios";

export const OptionSimple = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.[0] || null);
    };

    const handleOnClick = async () => {
        if (!file) {
            console.log('Файл не выбран!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:3010/stream', formData);
            console.log('Файл успешно загружен!');
        } catch (e) {
            console.log('Ошибка загрузки файла', e);
        }
    };

    return (
        <>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleOnClick}>Загрузить файл</button>
        </>
    );
};