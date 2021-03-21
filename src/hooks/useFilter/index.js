import { useEffect, useState } from "react";

function useFilter(data) {
  const [filteredData, setFilteredData] = useState(data);
  const [filterConfig, setFilterConfig] = useState({});

  const { searchKey, searchValue } = filterConfig;

  useEffect(() => {
    setFilteredData(data.filter((item) => item[searchKey] === searchValue));
  }, [data, searchValue, searchKey]);

  const applyFilter = (config) => setFilterConfig(config);

  return { filteredData, applyFilter };
}

export default useFilter;
