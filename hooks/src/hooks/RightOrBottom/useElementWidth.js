import { useEffect, useState } from "react";

export default function useElementWidth() {
  const [isRight, setIsRight] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".horizontal-scroll");

    function handleScroll() {
      const isRight =
        element.scrollWidth - element.scrollLeft === element.clientWidth;
      setIsRight(isRight);
    }

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isRight;
}
