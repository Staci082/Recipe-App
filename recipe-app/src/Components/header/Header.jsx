import { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { GiTacos } from "react-icons/gi";
import { CgLayoutGridSmall } from "react-icons/cg";
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
                <div className="logo">
                    <GiTacos size={30} />
                    Fiesta Flavors
                </div>

                <button>
                    <CgLayoutGridSmall className="menu-button" onClick={toggleMenu}/>
                </button>


                <input type="search" name="searchBar" className="search-bar" placeholder="Search.." aria-label="Search" />
                <button id="login-button">
                    <RxPerson size={30} />
                </button>
            </div>
        </>
    );
}

export default Header;
