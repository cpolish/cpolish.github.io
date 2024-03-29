import React from "react";


export function useDetectOutsideClick(callback: () => void,
                                      ref: React.MutableRefObject<HTMLElement | null>) {
  React.useEffect(() => {
    function handleOutsideClick(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, callback]);
}
