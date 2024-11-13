import React from "react";

const CardStencil = (props) => {
    const { count=1 } = props;

    return (
        <div className="w-full">
            {Array.from({ length: count }).map((index) => (
                <div className="w-full animate-pulse my-10" key={`cardStencil_${index}`}>
                    <div className="h-12 bg-custom rounded-md mb-3"></div>
                    <div className="h-3 bg-custom rounded-md mb-3 w-1/2"></div>
                    <div className="h-3 bg-custom rounded-md mb-3 w-3/4"></div>
                    <div className="h-3 bg-custom rounded-md mb-3 w-full"></div>
                </div>))}
        </div>
    );
};

export default CardStencil;
