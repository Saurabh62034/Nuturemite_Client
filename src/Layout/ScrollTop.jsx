import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import { fetchData } from "../Data/Data";

const ScrollTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    AOS.init({
      once: false,
      duration: 1000,
      easing: "ease-out-back",
    });
    AOS.refresh();
  }, [pathname]);

  return children || null;
};

export default ScrollTop;
