import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi2";
import { useAuth } from "../../Context/AuthContext";
import NotAuthorized from "../../Components/not-authorized/NotAuthorized";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// import { ToastError, ToastSuccess } from "../../Hooks/useToasts";
import { FiDelete } from "react-icons/fi";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

function GroceryList() {
    const { isLoggedIn } = useAuth();
    const [groceryItem, setGroceryItem] = useState("");
    const [groceryList, setGroceryList] = useState([]);


    return (
        <>
        {
            isLoggedIn ?

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

            : <NotAuthorized/>}
        </>
    );
}

export default GroceryList;
