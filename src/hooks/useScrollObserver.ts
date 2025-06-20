import { RefObject, useEffect, useState } from "react";

const useScrollObserver = (targetRef: RefObject<HTMLElement>) => {
  const [isScroll, setIsScrolled] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0 }
    );

    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [targetRef]);

  return isScroll;
};

export default useScrollObserver;
