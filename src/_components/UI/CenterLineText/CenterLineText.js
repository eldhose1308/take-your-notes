import React from "react";

const CenterLineText = ({ text, onClick, ...props }) => {

    return (
        <div className="border-b border-another my-5 text-center leading-1">
            <span className="bg-default text-secondary px-3 hover-text-default" onClick={onClick}>{text}</span>
        </div>
    )
}

export default CenterLineText;