import { useState, useEffect } from 'react';

const useEscapeKeyDuration = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [isEscapePressed, setIsEscapePressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !isEscapePressed) {
        setIsEscapePressed(true);
        setStartTime(Date.now());
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'Escape' && isEscapePressed) {
        setEndTime(Date.now());
        setIsEscapePressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isEscapePressed]);

  useEffect(() => {
    if (startTime !== null && endTime !== null) {
      const durationInSeconds = (endTime - startTime) / 1000;
      setDuration(durationInSeconds.toFixed(2));
    }
  }, [startTime, endTime]);

  return duration;
};

export default useEscapeKeyDuration;
