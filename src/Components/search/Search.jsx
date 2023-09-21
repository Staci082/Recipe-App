import UseSearchContext from "../../Context/SearchContext"


function Search() {
    const { input, handleChange } = UseSearchContext()

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
