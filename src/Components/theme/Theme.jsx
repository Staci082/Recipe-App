import { BsFillDropletFill } from "react-icons/bs";
import { useTheme } from "../../Context/ThemeContext";

function Theme({ showModal, closeModal }) {
    const { changeTheme, themes } = useTheme();

    const themeColors = Object.keys(themes);

    return (
        showModal && (
            <div className="theme-modal">
                <button onClick={closeModal} className="back-button">
                    &times;
                </button>
                <p className="theme-modal-title">Choose your theme:</p>

                <div className="theme-button-container">
                    {themeColors.map((color) => (
                        <button onClick={() => changeTheme(color)} className={`theme-button ${color}`} key={color}>
                            <BsFillDropletFill />
                        </button>
                    ))}
                </div>
            </div>
        )
    );
}

export default Theme;
