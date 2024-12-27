import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const useQueryParamsState = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const paramValue = searchParams.get(key);
    
        if (paramValue !== null) {
          setValue(paramValue);
        }
      }, [key, location.search]);

    return [value, setValue];
}

export default useQueryParamsState;