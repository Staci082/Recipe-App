import { RxPerson } from "react-icons/rx";
import { GiTacos } from "react-icons/gi";


function Header() {
    return (
        <>
            <div className="logo"><GiTacos size={30}/></div>
            <div className="header-container">
            <input type="search" name="searchBar" className="search-bar" placeholder="Search.." aria-label="Search"/>
                <RxPerson size={30}/>
                </div>
        </>
    );
}

export default Header;
