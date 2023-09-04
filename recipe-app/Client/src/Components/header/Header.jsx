import { useState } from "react";
import { CgLayoutGridSmall } from "react-icons/cg";
// import Menu from "../menu/Menu"


function Header() {


    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                <img width="48" height="48" src="https://img.icons8.com/color/48/kawaii-taco.png" alt="kawaii-taco"/>


                    Fiesta Flavors
                </div>

                <button>
                    <CgLayoutGridSmall className="menu-button"/>
                </button>


                <input type="search" name="searchBar" className="search-bar" placeholder="Search.." aria-label="Search" />

            </div>
        </>
    );
}

export default Header;
