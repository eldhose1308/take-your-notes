import React from "react";

const Drawer = ({ hide, direction='right', isActive, heading = '', children, ...props }) => {

    if (!isActive) {
        return null
    }


    return (
        <React.Fragment>

            <div onClick={hide} className="overlay z-50"></div>

            <div id="drawer-example" className={`fixed top-0 z-50 h-screenoverflow-y-auto  h-full
            bg-default border-l border-another w-80 transition-transform transform-none ${direction === 'right' ? 'right-0 translate-x-full' : 'left-0 translate-x-full-right'  }`}
                tabindex="-1" aria-labelledby="drawer-label">
                <div className="flex justify-between p-4 ">
                    <h5 id="drawer-label" className="flex items-center justify-center">{heading}</h5>
                    <button onClick={hide} type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-default bg-transparent rounded-lg text-sm top-2.5 end-2.5 flex items-center justify-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>
                {children}
            </div>
        </React.Fragment>
    )
}

export default Drawer