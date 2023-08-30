import { RxPerson } from "react-icons/rx";
import { GiTacos } from "react-icons/gi";
import { CgLayoutGridSmall } from "react-icons/cg";

function Header() {
    return (
        <>
            <div className="header-container">
                <div className="logo">
                    <GiTacos size={30} />
                    Fiesta Flavors
                </div>

                <button>
                    <CgLayoutGridSmall className="menu-button" />
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
