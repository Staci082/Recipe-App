import { useState } from "react";
import Search from "../search/Search";
import { CgLayoutGridSmall } from "react-icons/cg";
import Menu from "../menu/Menu";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

     const mobileMenuStyle = {
    display: openMenu ? "flex" : "none",
  };

    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <img width="48" height="48" src="/logo.avif" alt="taco logo" />
                    <p className="logo-title">Fiesta Flavors</p>
                </div>

                <Search />
                <CgLayoutGridSmall onClick={toggleMenu} className="menu-button" />
            </div>
            <div id="mobile-menu" style={mobileMenuStyle}>
                <Menu />
            </div>
        </>
    );
}

export default Header;
