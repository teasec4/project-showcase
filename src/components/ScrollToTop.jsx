import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // если у тебя скроллится window
    // window.scrollTo({ top: 0, behavior: "smooth" });

    // если у тебя отдельный контейнер:
    document.querySelector(".main-content")?.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}