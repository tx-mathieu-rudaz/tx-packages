import { useState, useEffect, RefObject } from "react";

const useGetSize = (ref: RefObject<HTMLDivElement>) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;

    const resizeObserver = new ResizeObserver(() => {
      if (element) {
        const { width, height } = element.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    });

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [ref]);

  return containerSize;
};

export default useGetSize;
