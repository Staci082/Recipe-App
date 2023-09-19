import { HiPlus } from "react-icons/hi2";

function GroceryList() {
    return (
        <>
            <div className="global-container">
                <div className="grocery-list-container">
                    <a href="/" className="grocery-back-button">
                        &times;
                    </a>
                    <h2>Grocery List</h2>

                            <input type="text" className="grocery-input" />
                            <button className="add-item-button">
                                <HiPlus size={28} />
                            </button>

                    <div className="grocery-list">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GroceryList;
