import usePageBottom from "./usePageBottom";
import Beer from "./Beer";
import { useCallback, useEffect, useState } from "react";

export default function PageBottom() {
  const [data, setData] = useState([]);
  const page = usePageBottom();

  const fetchData = useCallback(async () => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}`;
    const response = await fetch(url);
    const userData = await response.json();

    setData((c) => [...c, ...userData]);
    console.log([...data, ...userData]);
    console.log({ page });
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h2>usePageBottom</h2>
      <div className="copy-container">
        {data.map((d) => (
          <Beer key={d.id} {...d} />
        ))}
      </div>
    </>
  );
}
