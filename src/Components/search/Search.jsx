import { useState, useEffect } from "react"
import axios from "axios"

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [key, setKey] = useState("")

    useEffect(() => {
        const search = async () => {
            try {
                if (!key.trim()) {
                    setSearchResult([])
                    return
                }
                const res = await axios.get("http://localhost:5712/search/" + key)
                setSearchResult(res.data)
            } catch (error) {
                console.log(error)
            }
        }
    }, [key])

  return (
    <input type="text" 
            name="searchBar" 
            value={key} 
            className="search-bar" 
            placeholder="Search.." 
            aria-label="Search"
            onChange={(e) => setKey(e.target.value)}
            />
  )
}

export default Search