import logo from "../static/logo.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
import { useState, useEffect } from "react";
 

const Header = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  const helpHandler = () => {
    history.push("/help");
  };

  const func = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    return userInfo;
  };
  const [user, setProfileData] = useState([]);
  useEffect(() => {
    const userInfo = func();
    setProfileData(userInfo);
    //   console.log(profileData)
    //   console.log(typeof(userInfo))
    //   console.log(profileData.pic)
  }, []);
  //   Now we are subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (

  

    <div className="bg-white px-4 py-2 md:px-6 md:py-4">
    {/* Desktop navigation */}
    <div className="hidden md:flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to="/home">
          <img src={logo} alt="logo" className="w-24 md:w-32" />
        </Link>
      </div>

      {/* Navigation links */}
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/home" className="text-black text-xl  hover:text-orange-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="text-black text-xl  hover:text-orange-500">
            Feedback
          </Link>
        </li>
        <li>
          <Link to="/myorder" className="text-black text-xl  hover:text-orange-500">
            MyOrder
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-6">
        <Button colorScheme="orange" variant="outline" onClick={logoutHandler}>
          Logout
        </Button>
        <Link to="/cart" className="text-white">
          <i
            className="fa-solid fa-cart-shopping fa-2xl mt-6"
            style={{ color: '#FF9843' }}
          >
            {cartItems.length}
          </i>
        </Link>
        <ProfileModal children={user.pic} />
      </div>
    </div>

    {/* Mobile navigation */}
    <div className="md:hidden flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to="/home">
          <img src={logo} alt="logo" className={`w-24 ${!menuOpen ? 'ml-0' : 'mx-auto'}`} />
        </Link>
      </div>

      {/* Mobile menu button */}
      <div>
        <button onClick={toggleMenu}>
          <svg
            className="w-8 h-8 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile navigation menu */}
    {menuOpen && (
      <div className="md:hidden">
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link to="/home" onClick={toggleMenu} className="text-black text-lg hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/feedback" onClick={toggleMenu} className="text-black text-lg hover:text-orange-500">
              Feedback
            </Link>
          </li>
          <li>
            <Link to="/myorder" onClick={toggleMenu} className="text-black text-lg hover:text-orange-500">
              MyOrder
            </Link>
          </li>
        </ul>

        <div className="flex flex-col items-center space-y-4 mt-4">
          <Button colorScheme="orange" variant="outline" onClick={logoutHandler}>
            Logout
          </Button>
          <Link to="/cart" className="text-white">
            <i
              className="fa-solid fa-cart-shopping fa-2xl"
              style={{ color: '#FF9843' }}
            >
              {cartItems.length}
            </i>
          </Link>
          <ProfileModal children={user.pic} />
        </div>
      </div>
    )}
  </div>
  );
};

export default Header;
