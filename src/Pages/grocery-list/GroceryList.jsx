import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi2";
import { useAuth } from "../../Context/AuthContext";
import NotAuthorized from "../../Components/not-authorized/NotAuthorized";
import axios from "axios";
import { ToastError } from "../../Hooks/useToasts";
import { FiDelete } from "react-icons/fi";
import { MdOutlineChevronLeft, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import baseAPI from "../../Context/baseAPI";

function GroceryList() {
    const { isLoggedIn } = useAuth();
    const [groceryItem, setGroceryItem] = useState("");
    const [checked, setChecked] = useState([]);
    const [groceryList, setGroceryList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = JSON.parse(localStorage.getItem("user")).id;
                const response = await axios.get(baseAPI + "auth/user/" + userId);
                const userData = response.data;
                setGroceryList(userData.groceryItems);
            } catch (error) {
                console.log(error);
                if (isLoggedIn) {
                    ToastError("Oops! Something went wrong!");
                }
            }
        };

        fetchData();
    }, []);

    const handleAddItem = async () => {
        if (groceryItem != "") {
            try {
                const userId = JSON.parse(localStorage.getItem("user")).id;

                const response = await axios.get(baseAPI + "auth/user/" + userId);
                const userData = response.data;
                userData.groceryItems.push(groceryItem);

                await axios.put(baseAPI + "auth/user/" + userId, userData);

                setGroceryList(userData.groceryItems);
                setGroceryItem("");
            } catch (error) {
                console.log(error);

                if (isLoggedIn) {
                    ToastError("Oops! Something went wrong!");
                }
            }
        }
    };

    const handleToggleCheck = (index) => {
        const newCheckedItems = [...checked];
        newCheckedItems[index] = !newCheckedItems[index];
        setChecked(newCheckedItems);
    };

    const handleDeleteItem = async (index) => {
        try {
            const userId = JSON.parse(localStorage.getItem("user")).id;

            const response = await axios.get(baseAPI + "auth/user/" + userId);
            const userData = response.data;

            userData.groceryItems.splice(index, 1);

            await axios.put(baseAPI + "auth/user/" + userId, userData);

            setGroceryList(userData.groceryItems);
        } catch (error) {
            console.log(error);
            if (isLoggedIn) {
                ToastError("Oops! Something went wrong!");
            }
        }
    };

    const handleInputKeyPress = (event) => {
        if (event.key === "Enter") {
            handleAddItem();
        }
    };

    return (
        <>
            {isLoggedIn ? (
                <div className="global-container">
                    <div className="grocery-list-container">
                        <a href="/" className="back-button">
                            <MdOutlineChevronLeft/>
                        </a>
                        <h2 className="grocery-title">Grocery List</h2>

                        <input type="text" className="grocery-input" htmlFor="groceryList" value={groceryItem} onChange={(e) => setGroceryItem(e.target.value)} onKeyDown={handleInputKeyPress} />

                        <button onClick={handleAddItem} className="add-item-button">
                            <HiPlus size={28} />
                        </button>

                        <div className="grocery-list">
                            {groceryList.map((item, index) => (
                                <div className="line" key={index}>
                                    <button onClick={() => handleToggleCheck(index)}>{checked[index] ? <MdOutlineCheckBox size={20} /> : <MdOutlineCheckBoxOutlineBlank size={20} />}</button>
                                    <p className={`line-text ${checked[index] ? "line-through" : ""}`}>{item}</p>
                                    <button type="button" onClick={() => handleDeleteItem(index)}>
                                        <FiDelete size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <NotAuthorized />
            )}
        </>
    );
}

export default GroceryList;
