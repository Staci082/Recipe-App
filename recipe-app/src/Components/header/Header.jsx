import { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { CgLayoutGridSmall } from "react-icons/cg";
import LoginRegister from "../../Components/login-register/LoginRegister"
import Menu from "../menu/Menu"


function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    // const menuStyle = {
    //     display: flex
    // }

    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                <img width="48" height="48" src="https://img.icons8.com/color/48/kawaii-taco.png" alt="kawaii-taco"/>


                    Fiesta Flavors
                </div>

                <button>
                    <CgLayoutGridSmall className="menu-button" onClick={toggleMenu}/>
                </button>


                <input type="search" name="searchBar" className="search-bar" placeholder="Search.." aria-label="Search" />
                <button id="login-button">
                {<LoginRegister/>}
                    <RxPerson size={30} />
                </button>
            </div>
        </>
    );
}

export default Header;
