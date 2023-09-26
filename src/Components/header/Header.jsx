import { useState } from "react";
import Search from "../search/Search";
import { CgLayoutGridSmall } from "react-icons/cg";
import Menu from "../menu/Menu";

function Header() {
    const [openMenu, setOpenMenu] = useState(true);

    return (
        <>
            <div className="header-container">
                {/* <div id={openMenu ? "mobile-menu" : ""}>
                        <Menu/>
                    </div> */}
                <div className="logo-container">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/kawaii-taco.png" alt="kawaii-taco" />
                    <p className="logo-title">Fiesta Flavors</p>
                </div>

                <Search />
                <CgLayoutGridSmall className="menu-button" />
            </div>
        </>
    );
}

export default Header;
