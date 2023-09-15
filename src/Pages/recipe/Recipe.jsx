import { FaPencil, FaTrashCan } from "react-icons/fa6";

function Recipe() {

const ingredients = [
    "lorem",
    "loremipsun",
    "loremi",
    "loremrem",
    "loremlorem",
    "lorems",
    "loremipsun",
    "loremum"
]

    return (
        <>
        <h1 className="recipe-name">Recipe name</h1>
        <a href="/" className="recipe-back-button">&times;</a>
            <div className="single-recipe-container">
                <div className="ingredients-container">
                    <ul>
                        {ingredients.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="instructions-container">1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 2. Ab repellendus quod consequuntur nobis omnis soluta ea eum officia molestias quasi? 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. 4. Earum, magni. 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. 6. Earum, magni.</div>
            </div>

            <div className="recipe-button-container">
                <a href="/edit/{_id}" className="edit-buttons"><FaPencil /></a>
                <a href="/delete/{_id}" className="edit-buttons"><FaTrashCan /></a>
            </div>
        </>
    );
}

export default Recipe;
