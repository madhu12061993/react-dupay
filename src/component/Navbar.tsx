import Fevicon from "../assets/dupayAssets/favicon.icon.png"
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <div className="bg-warning">
      <nav className="navbar fixed-top navbar-light bg-light">
  <div className="container-fluid">
    <img src={Fevicon} alt="DuePay" className="duepayLogo"/>
    <form className="d-flex">
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
      <button className="btn btn-outline-success" type="submit">Download App</button>
    </form>
  </div>
</nav>
</div>    
  )
}

export default Navbar