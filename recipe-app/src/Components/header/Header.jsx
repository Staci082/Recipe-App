import { RxPerson } from "react-icons/rx";
import { GiTacos } from "react-icons/gi";


function Header() {
    return (
        <>
            <div className="logo"><GiTacos size={30}/>Fiesta Flavors</div>
            <div className="header-container">
            <input type="search" name="searchBar" className="search-bar" placeholder="Search.." aria-label="Search"/>
                <button id="login-button"><RxPerson size={30}/></button>
                </div>
        </>
    );
}

export default Header;
