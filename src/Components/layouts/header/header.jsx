import './../header/header.css';
import Logo from './../../../images/Ninja.png';

function MenuHeader() {
    return (
        
        <><div className="font">
            <img src={Logo} className="img-logo" alt="logo" />
            <ul className="menu-bar">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div></>
    );
}
export default MenuHeader;
