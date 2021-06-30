import Beer from "./Beer";
import { useCallback, useEffect, useState } from "react";
import useElementBottom from "./useElementBottom";
import useElementWidth from "./useElementWidth";

export default function RightOrBottom() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isWrapped, setIsWrapped] = useState(false);
  const isBottom = useElementBottom();
  const isRight = useElementWidth();

  useEffect(() => {
    if (isBottom || isRight) {
      setPage((c) => c + 1);
    }
  }, [isBottom, isRight]);

  const fetchData = useCallback(async () => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=5`;
    const response = await fetch(url);
    const userData = await response.json();

    setData((c) => [...c, ...userData]);
    console.log([...data, ...userData]);
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h2>2. To fetch data upon hitting bottom or right of the element</h2>
      <button className="btn" onClick={() => setIsWrapped((c) => !c)}>
        Toggle to align data in vertical or horizontal way
      </button>
      <div
        className={
          isWrapped ? "horizontal-scroll wrap" : "horizontal-scroll nowrap"
        }
      >
        {data.map((d) => (
          <Beer key={d.id} {...d} />
        ))}
      </div>
    </>
  );
}
