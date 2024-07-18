import React, { useState } from "react";

const Draggable = ({ children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };
   
    const handleMouseUp = () => {
        if (dragging) {
            setDragging(false);
        }
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y
            });
        }
    };

    return (
        <div className="absolute border-2 border-another rounded-xl bg-secondary p-3"
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                cursor: dragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {children}
        </div>
    );
}

export default Draggable