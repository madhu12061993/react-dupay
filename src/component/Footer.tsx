import dupayLogo from "../assets/dupayAssets/Logo.png";
import x from "../assets/dupayAssets/x.png";
import facebook from "../assets/dupayAssets/facebook.png";
import insta from "../assets/dupayAssets/insta.png";
import linnkedIn from "../assets/dupayAssets/linkedin.png";
import youtube from "../assets/dupayAssets/youtube.png";
import googleplay from "../assets/dupayAssets/google play.png";
import appstore from "../assets/dupayAssets/app store.png";
import appGallery from "../assets/dupayAssets/app gallery.png";
import "../css/Footer.css";



const Footer = () => {
  return (
    <div className="container-fluid footerColor">
      <div className="container">
        <div className=" d-flex justify-content-between dupay">
          <div>
            <img src={dupayLogo} alt="dupayLogo" className="bg-dark" />
          </div>
          <p>Your <span> money</span> , your way</p>
        </div>
      </div>
      <hr />
      <div className="container py-5">
        <div className="row homeColor mb-4">
          <div className="col-2">
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="col statement">
            <p>Terms and Conditions</p>
            <p>Fee and Limits (Key Fact Statement)</p>
            <p>FAQ</p>
          </div>
        </div>

        <div className="row  socialMediaApps">
          <div className="col socialMedia">
            <img src={facebook} alt="facebook" />
            <img src={x} alt="x" />
            <img src={insta} alt="insta" />
            <img src={linnkedIn} alt="linnkedIn" />
            <img src={youtube} alt="youtube" />
          </div>
          <div className="col apps">
            <p className="m-0">Download du Pay</p>
            <img src={appstore} alt="appstore" className="me-2" />
            <img src={googleplay} alt="googleplay" className="me-2" />
            <img src={appGallery} alt="appGallery" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
