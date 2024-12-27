import React from "react";
import './Alerts.css';

const alertColors = {
    info: {
        border: 'border-info',
        text: 'text-info',
    },
    error: {
        border: 'border-destructive',
        text: 'text-destructive',
    },
}

const alertIcon = {
    info: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>,
    error: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
}

const Alerts = (props) => {
    const { type = 'error', children } = props;

    return (
        <div className={`flex text-sm my-2 px-4 py-2 bg-default border-l ${alertColors[type].border} rounded-md`}>
            <div className={`flex ${alertColors[type].text} items-center mr-2`}>
                {alertIcon[type]}
            </div>

            <div className='flex flex-col'>
                {children}
            </div>
        </div>

    )
}

export default Alerts;