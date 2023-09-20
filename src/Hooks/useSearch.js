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
                console.log("backend:", response.data);
            } catch (error) {
                if (axios.isCancel(error)) {
                } else {
                    console.error("Error fetching data:", error);
                }
            }
        };
        fetchRecipes();
        console.log("searchContext: ", results);

        return () => {
            if (source) {
                source.cancel();
            }
        };
    }, [input]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return { input, results, setResults, handleChange }
}

export default useSearch;



// import { useState, useEffect } from "react";
// import axios from "axios";

// const useSearch = () => {
//   const [input, setInput] = useState("");
//   const [results, setResults] = useState([]);
//   const [cancelToken, setCancelToken] = useState(null);

//   useEffect(() => {
//     if (input.trim() === "") {
//       setResults([]);
//       return;
//     }

//     const source = axios.CancelToken.source();
//     setCancelToken(source);

//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:5712/search",
//           { query: input },
//           { cancelToken: source.token }
//         );

//         // Ensure that the data you receive is an array of objects
//         const responseData = response.data;

//         // Verify that responseData is an array and contains data
//         if (Array.isArray(responseData) && responseData.length > 0) {
//           setResults(responseData);
//           console.log("backend:", responseData);
//         } else {
//           // Handle the case where responseData is empty or not an array
//           console.error("Empty or invalid data received from the API");
//         }
//       } catch (error) {
//         if (axios.isCancel(error)) {
//           // Request was canceled; no need to handle this as an error
//         } else {
//           console.error("Error fetching data:", error);
//         }
//       }
//     };

//     fetchRecipes();

//     return () => {
//       if (source) {
//         source.cancel();
//       }
//     };
//   }, [input]);

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   return { input, results, handleChange };
// };

// export default useSearch;