import { useState } from "react";
import Search from "../search/Search";
import { CgLayoutGridSmall } from "react-icons/cg";
import Menu from "../menu/Menu";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const closeMenu = () => {
        setOpenMenu(false);
    };

    const mobileMenuStyle = {
        display: openMenu ? "flex" : "none",
    };

    return (
        <>
            <div className="header-container">

                <Search />
                <CgLayoutGridSmall onClick={toggleMenu} className="menu-button" />
            </div>
            <div id="mobile-menu" style={mobileMenuStyle}>
                <Menu closeMenu={closeMenu} />
            </div>
        </>
    );
}

export default Header;
