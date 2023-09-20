import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [cancelToken, setCancelToken] = useState(null);

    useEffect(() => {
        if (input.trim() === "") {
            setResults([]);
            return;
        }

        // added cancelToken so only last updated value gets returned
        const source = axios.CancelToken.source();
        setCancelToken(source);

        const fetchRecipes = async () => {
            try {
                const response = await axios.post("http://localhost:5712/search", { query: input }, { cancelToken: source.token });
                setResults(response.data);
                console.log(response.data);
            } catch (error) {
                if (axios.isCancel(error)) {
                } else {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchRecipes();

        return () => {
            if (source) {
                source.cancel();
            }
        };
    }, [input]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return { input, results, handleChange }
}

export default useSearch;