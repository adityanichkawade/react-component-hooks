import { useEffect, useState } from "react";

function useFilter(data) {
  const [filterResult, setFilterResult] = useState(data);
  const [filterConfig, setFilterConfig] = useState({});

  const { searchKey, searchValue } = filterConfig;

  useEffect(() => {
    setFilterResult(
      data.filter((item) =>
        searchKey ? item[searchKey] === searchValue : item === searchValue
      )
    );
  }, [data, searchValue, searchKey]);

  const applyFilter = (config) => setFilterConfig(config);

  return { filterResult, applyFilter };
}

export default useFilter;
