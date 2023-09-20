import { createContext } from "react";
import useSearch from "../Hooks/useSearch.js"

const SearchContext = createContext();


export const SearchProvider = ({ children }) => {
  const { results, setResults } = useSearch()
  console.log("searchContext: ", results)

  return (
    <SearchContext.Provider value={{ results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;