import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setbtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        console.log("Use Effect Called");
    }, []);
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <div className="x">
                <img className="w-56" src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=826&t=st=1687019162~exp=1687019762~hmac=c17f3bd2c5b29ee77fc0340808215d0f82b8ffb896027bf3c5eb80f7e8bae9ac">
                </img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-6 m-6">
                    <li className="px-4">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅": "🔴"}
                    </li>
                    <li className="px-4">
                         <Link to="/about"> About Us  </Link>
                    </li>
                    <li className="px-4">
                         <Link to="/contact"> Contact Us  </Link>
                    </li>
                    <li className="px-4">
                         <Link to="/grocery"> Grocery  </Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <li className="px-4">Profile</li>
                    <button className = "loginBtn" onClick={ () => { btnName==='Login' ? setbtnName('Logout') : setbtnName('Login') } }>{btnName}</button>
                </ul>
            </div>

        </div>
    );
};

export default Header;