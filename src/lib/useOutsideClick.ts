import { MouseEvent, RefObject, useEffect } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: (event: MouseEvent<HTMLElement> | TouchEvent) => void
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent<HTMLElement> | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }

      callback(event as MouseEvent<HTMLElement>);
    };

    document.addEventListener("mousedown", listener as EventListener);
    document.addEventListener("touchstart", listener as EventListener);

    return () => {
      document.removeEventListener("mousedown", listener as EventListener);
      document.removeEventListener("touchstart", listener as EventListener);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
