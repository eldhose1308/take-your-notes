import React, { useEffect, useState } from "react";

import './DragAndDrop.css';


const DragAndDrop = (props) => {
    const { items=[], onReordered=()=>{} } = props;

    const [draggedIndex, setDraggedIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleDragStart = (e, index) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();

        if (draggedIndex === index) return;

        setCurrentIndex(index);

        const sortableList = document.querySelector(".draggable-list");
        const draggingItem = document.querySelector(".dragging");
        const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

        const nextSibling = siblings.find((sibling) => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });

        sortableList.insertBefore(draggingItem, nextSibling);

    };

    const handleDragEnter = (e) => {
        e.preventDefault()
    }


    const handleDragEnd = () => {
        setDraggedIndex(null);

        const newItems = [...items];
        const [draggedItem] = newItems.splice(draggedIndex, 1);
        newItems.splice(currentIndex, 0, draggedItem);

        onReordered(newItems);
        // setItems(newItems);
    };

    return (
        <React.Fragment>
            <div className="flex text-xs">
                <div className="draggable-list" onDragEnter={handleDragEnter}>
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, index)}
                            data-id={index}
                            className={`flex item justify-between items-center border-2 border-another rounded-xl bg-secondary px-3 py-1 my-3 cursor-move ${index === draggedIndex ? "dragging" : ""}`}
                        >
                           
                            <div className="details mr-2">
                                {item.name}
                            </div>
                            <span className="flex ml-2 text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-horizontal"><circle cx="12" cy="9" r="1"/><circle cx="19" cy="9" r="1"/><circle cx="5" cy="9" r="1"/><circle cx="12" cy="15" r="1"/><circle cx="19" cy="15" r="1"/><circle cx="5" cy="15" r="1"/></svg>
                             {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg> */}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default DragAndDrop;