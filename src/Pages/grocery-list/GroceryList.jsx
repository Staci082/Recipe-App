import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi2";
import axios from "axios";
import { ToastError } from "../../Hooks/useToasts";
import { FiDelete, FiEdit3 } from "react-icons/fi";

function GroceryList() {
    const [items, setItems] = useState([]); // Store the list of items
    const [itemInput, setItemInput] = useState(""); // Store the current input value

    const handleAddItem = async () => {
        try {
            if (itemInput.trim() !== "") {
                // Add the current input value to the items list
                setItems([...items, itemInput]);
                setItemInput(""); // Clear the input field
            }
            await axios.post("http://localhost:5712/auth/list", { item: itemInput });
            console.log(itemInput);
        } catch (error) {
            console.log(error);
            ToastError("Oops! Something went wrong!");
        }
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const result = await axios.get("http://localhost:5712/auth/list")
                setItems(result.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchItems()
    }, [])

    const handleEdit = async (id) => {
        try {
            const result = await axios.put("http://localhost:5712/auth/list/" + id )
            console.log(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="global-container">
                <div className="grocery-list-container">
                    <a href="/" className="grocery-back-button">
                        &times;
                    </a>
                    <h2>Grocery List</h2>

                    <input onChange={(e) => setItemInput(e.target.value)} value={itemInput} type="text" className="grocery-input" name="" />
                    <button onClick={handleAddItem} className="add-item-button">
                        <HiPlus size={28} />
                    </button>

                    <div className="grocery-list">
                        {items.map((item, index) => 
                            <>
                                <div className="line" key={index}>
                                <button onClick={() => handleEdit(item._id)}><FiEdit3 size={20}/></button>
                                {item.item}
                                <FiDelete size={20}/>
                                </div>
                                
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
}

export default GroceryList;
