import { useEffect, useState } from "react";

export default function usePageBottom() {
  // const [bottom, setBottom] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const isBotttom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;

      // setBottom(isBotttom);

      if (isBotttom) {
        setPage((c) => c + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return page;
}
