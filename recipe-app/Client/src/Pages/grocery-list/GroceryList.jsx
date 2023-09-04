import { HiPlus } from "react-icons/hi2";

function GroceryList() {
    return (
        <>
            <div className="grocery-list-container">
            <a href="/" className="grocery-back-button">&times;</a>
                <div className="grocery-input-container">
                    <h2>Grocery List</h2>
                    <input type="text" className="grocery-input" />
                    <button className="add-item-button">
                        <HiPlus size={28} />
                    </button>
                </div>

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
        </>
    );
}

export default GroceryList;
