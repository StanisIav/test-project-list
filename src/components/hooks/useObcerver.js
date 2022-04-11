import { useRef, useEffect } from "react";

export const useObcerver = (lastObj, loading, canCall, callback) => {
    const observer = useRef();
    useEffect(() => {
  
        if(observer.current) observer.current.disconnect();
        var ck = function(entries, observer) {
          if(entries[0].isIntersecting && canCall){
          callback();
        }
        };
        observer.current = new IntersectionObserver(ck);
        observer.current.observe(lastObj.current);

      },[loading]);
}