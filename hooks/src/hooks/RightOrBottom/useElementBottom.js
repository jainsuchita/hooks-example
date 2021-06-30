import { useEffect, useState } from "react";

export default function useElementBottom() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".horizontal-scroll");

    function handleScroll() {
      const isBottom =
        element.scrollHeight - element.scrollTop === element.clientHeight;
      setIsBottom(isBottom);
    }

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isBottom;
}
