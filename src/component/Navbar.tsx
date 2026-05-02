import Fevicon from "../assets/dupayAssets/Logo.png"
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <div className="bg-warning">
      <nav className="navbar navbar-light nav-color" >
        <div className="container">
          <img src={Fevicon} alt="DuePay" className="duepayLogo" />
          <form className="d-flex gap-4 me-4">
            <div className="NavContact ">
              <a href="#" className="text-white text-decoration-none fw-900">About Us</a>
              <a href="#" className="text-white text-decoration-none fw-900">Contact Us</a>
            </div>
            <button className="btn  navBtn  p-2  px-4 border-2 btn-primary " type="submit">Download App</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar