import { useRef } from 'react';

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
      if (element.current) {
        console.log(element.current);
        element.current.requestFullscreen();
        if (callback && typeof callback === "function") {
          callback(true);
        }
      }
    };
    const exitFull = () => {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
    };
  
    return { element, triggerFull, exitFull };
};

export default useFullscreen;