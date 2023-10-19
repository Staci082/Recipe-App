import UseSearchContext from "../../Context/SearchContext";
import { RiSearchLine } from "react-icons/ri";

function Search() {
    const { input, handleChange } = UseSearchContext();

    return (
        <>
            <div className="search-container">
                <RiSearchLine size={18} className="search-icon" />
                <input type="text" name="searchBar" value={input} className="search-bar" placeholder="Search.." aria-label="Search" onChange={handleChange} />
            </div>
        </>
    );
}

export default Search;
