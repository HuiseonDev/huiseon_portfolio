import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // 뒤로가기
    if (navigationType === "POP") {
      const savedScrollPosition = sessionStorage.getItem(`scroll-${pathname}`);
      if (savedScrollPosition) {
        requestAnimationFrame(() => {
          window.scrollTo(0, parseInt(savedScrollPosition));
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  useLayoutEffect(() => {
    // 스크롤 위치 저장
    const handleScroll = () => {
      sessionStorage.setItem(
        `scroll-${pathname}`,
        window.pageYOffset.toString()
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
