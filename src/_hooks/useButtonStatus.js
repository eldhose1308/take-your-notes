import { useState } from "react";

const useButtonStatus = (buttonStateValues) => {
    const [buttonStatus, setButtonStatus] = useState('none');

    const updateButtonStatus = (newStatus) => {
        setButtonStatus(newStatus);
    };
    
    return [buttonStatus, buttonStateValues[buttonStatus], updateButtonStatus];
}

export default useButtonStatus;