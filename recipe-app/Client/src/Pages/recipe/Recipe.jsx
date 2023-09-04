import { GrTrash, GrEdit } from "react-icons/gr";

function Recipe() {
    return (
        <>
        <h1 className="recipe-title">Recipe name</h1>

            <div className="recipe-container">
                <div className="ingredients-container"></div>
                <div className="instructions-container"></div>
            </div>

            <div className="recipe-button-container">
                <a href="/edit/{_id}" className="edit-buttons">
                    <GrEdit />
                </a>
                <a href="/delete/{_id}" className="edit-buttons">
                    <GrTrash />
                </a>
            </div>
        </>
    );
}

export default Recipe;
