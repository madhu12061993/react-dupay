import { useEffect, useState } from "react"
import Fevicon from "../assets/dupayAssets/Logo.png"
import dupayScroll from "../assets/dupayAssets/dupa logo scroll.png";
import "../css/Navbar.css"

const Navbar = () => {
  const [isScroll, setisScroll] = useState(false);
  useEffect (() => {
    const handleScroll = () => {
      setisScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll" , handleScroll);
    return ()=> {
      window.removeEventListener("scroll" , handleScroll);
    };
  },[]);
  return (
    <div className="bg-warning">
      <nav className={`navbar navbar-light navbar-expand-lg fixed-top ${isScroll ? " navColor " : "nav-color"}`} >
        <div className="container">
          {isScroll ? (
          <img src={dupayScroll} alt="DuePay" className="dupayScroll" />
          ) : (
          <img src={Fevicon} alt="DuePay" className="duepayLogo" />
          )}
          <form className="d-flex gap-4 me-4">
            <div className="NavContact">
              <a href="#" className={` text-decoration-none fw-900 ${isScroll ? "navContactColor" : "text-white"}`}>About Us</a>
              <a href="#" className={` text-decoration-none fw-900 ${isScroll ? "navContactColor" : "text-white"}`}>Contact Us</a>
            </div>
            <button className="btn  navBtn  p-2  px-4 border-2 btn-primary " type="submit">Download App</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar