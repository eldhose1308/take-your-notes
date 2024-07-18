import React, { useState, useEffect } from "react";
import Portal from "_components/Misc/Portal";

import './OffCanvas.css'

const OffCanvas = (props) => {
    const { heading, isActive = false, onClose, children } = props;


   

    if(!isActive){
        return null
    }

   

    return (
        // <Portal>
             <div className={`offcanvas offcanvas-bottom ${isActive ? 'show' : 'hide'}`}>
                <div className="offcanvas-header">
                    {/* <h3 className="header-title">Edit Option</h3> */}
                    <span className="offcanvas-close" onClick={onClose}>Close x</span>
                </div>
                
                <div className="offcanvas-body">
                    {isActive && children}
                </div>

                <div className="offcanvas-footer"></div>
            </div>
        // </Portal>
    )
}

export default OffCanvas;

