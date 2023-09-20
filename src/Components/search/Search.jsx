import useSearch from "../../Hooks/useSearch.js"


function Search() {
    const { input, handleChange } = useSearch()

    return <input 
    type="text" 
    name="searchBar" 
    value={input} 
    className="search-bar" 
    placeholder="Search.." 
    aria-label="Search" 
    onChange={handleChange} />;
}

export default Search;
