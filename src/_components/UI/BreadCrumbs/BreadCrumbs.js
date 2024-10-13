import React from "react";

const BreadCrumbs = ({ items = [] }) => {
    const itemsLength = items.length - 1;

    return (
        <div className="flex rounded-lg px-2 my-2 text-xs bg-default text-secondary">
            {items.map((item, index) => {
                const isLastItem = index === itemsLength;
                return (
                    <React.Fragment>
                        <span className={`${!isLastItem ? '' : 'text-default'}`}>{item}</span>
                        {!isLastItem && (<span className="flex items-center text-default mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                        </span>)}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default BreadCrumbs;