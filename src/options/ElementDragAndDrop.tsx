import React, {useState} from 'react';

export const ElementDragAndDrop = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({x: 0, y: 0});
    const [position, setPosition] = useState({left: 200, top: 100});


    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        //alert(JSON.stringify(offset))
        setIsDragging(true);// ставлю флаг чтоб понимать что кнопка нажата
        // и при перемещении мыши буду опрашивать НАЖАТА КНОПКА
        setOffset({
            x: e.clientX - position.left, //e.clientX  -- это где я мышью нажал в браузере (но понятно что
            // обработчик события отработает только на элементе на который я его повесил
            // position.left  ---  это текущие координаты верхнего левого угла элемента
            y: e.clientY - position.top,
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
            setPosition({
                left: e.clientX - offset.x,
                top: e.clientY - offset.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                cursor: 'pointer',
            }}
            onMouseDown={handleMouseDown} // нажал кнопку мыши на элементе
            onMouseMove={handleMouseMove} // когда указатель мыши перемещается, пока он находится над элементом
            onMouseUp={handleMouseUp} // когда  отпустил  кнопку мыши
            onMouseLeave={handleMouseUp} // Чтобы остановить перетаскивание, если мышь выходит за пределы
        >
            Перетаскивай меня!
        </div>
    );
};



