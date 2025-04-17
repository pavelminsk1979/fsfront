import React, {useState} from "react";
import axios from "axios";

export const OptionWithChankes = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: any) => {
        setFile(event.target.files[0])

    };

    const uploadChunk = async (chunk: Blob, chunkIndex: number, totalChunks: number) => {
        const formData = new FormData();
        formData.append('chunk', chunk);
        formData.append('chunkIndex', chunkIndex.toString());
        formData.append('totalChunks', totalChunks.toString());

        try {
            await axios.post('http://localhost:3010/yandexbigfile', formData);
            console.log(`Часть ${chunkIndex} из ${totalChunks} успешно загружена!`);
        } catch (e) {
            console.log('Ошибка загрузки части', e);
        }
    };

    const handleOnClick = async () => {
        if (!file) {
            console.log('Файл не выбран!');
            return;
        }

        const chunkSize = 5 * 1024 * 1024; // 6 МБ была ошибка на бэке если чась менее 5 мб
        const totalChunks = Math.ceil(file.size / chunkSize);

        for (let i = 0; i < totalChunks; i++) {
            const start = i * chunkSize;
            const end = Math.min(start + chunkSize, file.size);
            const chunk = file.slice(start, end);
            await uploadChunk(chunk, i + 1, totalChunks);
        }

        console.log('Все части успешно загружены!');
    };

    return (
        <>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleOnClick}>Загрузить любого размера файл</button>
        </>
    );
}