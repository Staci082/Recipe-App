import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi2";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastError, ToastSuccess } from "../../Hooks/useToasts";
import { FiDelete } from "react-icons/fi";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

function GroceryList() {
    const [groceryItem, setGroceryItem] = useState("");
    const [groceryList, setGroceryList] = useState([]);
    const [cookies] = useCookies(['userId']);
    const userId = cookies.userId || '';
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // // const [cookies] = useCookies(["access_token"]);

    // useEffect(() => {
    //     if (userId ) {
    //         setIsLoggedIn(true);
    //     } else {
    //         setIsLoggedIn(false);
    //     }
    // }, [userId ]);

   
  useEffect(() => {
    // Get the userId from cookies
    const userIdFromCookies = cookies.userId;

    // Check if userIdFromCookies is defined
    if (userIdFromCookies) {
      // Fetch the user's grocery list using userIdFromCookies
      axios
        .get(`http://localhost:5712/auth/list/${userIdFromCookies}`)
        .then((response) => {
          setGroceryList(response.data.groceryList);
        })
        .catch((error) => {
          console.error("Error fetching grocery list:", error);
        });
    }
  }, [cookies.userId]);

    const handleAddItem = () => {
        // Send a POST request to add a new item to the list
        axios
            .post(`http://localhost:5712/auth/list/${userId}`, { name: groceryItem })
            .then((response) => {
                setGroceryList([...groceryList, response.data.newItem]);
                setGroceryItem("");
            })
            .catch((error) => {
                console.error("Error adding grocery item:", error);
            });
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (!isLoggedIn) {
    //         ToastError("You must be logged in to add items.");

    //         return;
    //     }
    //     try {

    //         if (itemInput.trim() !== "") {
    //             const response = await axios.post("http://localhost:5712/auth/list", { item: itemInput });
    //             setItem([...item, { _id: response.data._id, name: itemInput }]);
    //             setItemInput("");

    //         console.log(item);
    //         ToastSuccess("Item created!")
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         ToastError("Oops! Something went wrong!")
    //     }
    // };

    const handleDelete = (i) => {
        const newArray = [...groceryList]; // Change 'item' to 'groceryList'
        newArray.splice(i, 1);
        setGroceryList(newArray); 
    }

    return (
        <>
            <div className="global-container">
                <div className="grocery-list-container">
                    <a href="/" className="grocery-back-button">
                        &times;
                    </a>
                    <h2>Grocery List</h2>

                    <input type="text" className="grocery-input" htmlFor="groceryList" />
                    <button onClick={handleAddItem} className="add-item-button">
                        <HiPlus size={28} />
                    </button>

                    <div className="grocery-list">
                        {groceryList.map((item, index) => (
                            <>
                                <div className="line" key={item._id}>
                                    <button onClick={() => handleChecked(item._id, item.checked)}>{item.checked === false ? <MdOutlineCheckBox size={20} /> : <MdOutlineCheckBoxOutlineBlank size={20} />}</button>
                                    <p className={item.checked ? "crossed-out" : ""}>{item.item}</p>
                                    <button type="button" onClick={() => handleDelete(index)} className="remove-ingredient-button">
                                        <FiDelete size={20} />
                                    </button>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GroceryList;
