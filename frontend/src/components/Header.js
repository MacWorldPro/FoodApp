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
  return (
    <>
      <div className="grid grid-cols-3 ">
        <div>
          {/* Logo */}
          <img src={logo} alt="logo" className="w-[120px]"></img>
        </div>
        <div>
          {/* router */}
          <ul className="flex flex-row justify-center space-x-5 mt-[25px] font-mono text-xl">
            <li className="hover:text-orange-500">
              <Link to="/home">Home</Link>
            </li>
            {/* <li className='hover:text-orange-500 active:text-orange-500'>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li> */}
            <li className="hover:text-orange-500 active:text-orange-500 ">
              <Link to="/feedback">Feedback</Link>
            </li>
            <li className="hover:text-orange-500 active:text-orange-500">
              <Link to="/myorder">MyOrder</Link>
            </li>
          </ul>
        </div>

        <div className="justify-end space-x-6 mt-[25px] ml-[60px] grid grid-cols-3">
          {/* Button section */}
          
            
       
          <Button
            colorScheme="orange"
            variant="outline"
            onClick={logoutHandler}
          >
            Logout
          </Button>
          {/* <Button colorScheme='orange' variant='solid' onClick={helpHandler}>Help</Button> */}
          <Link to="/cart">
            <i
              className="fa-solid fa-cart-shopping fa-2xl mt-[20px]"
              style={{ color: "#FF9843" }}
            >
              {cartItems.length}
            </i>
          </Link>
          <ProfileModal children={user.pic} />
        </div>
       
      </div>
    </>
  );
};

export default Header;
