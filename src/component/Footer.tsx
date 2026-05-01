import dupayLogo from "../assets/dupayAssets/Logo.png";
import x from "../assets/dupayAssets/x.png";
import facebook from "../assets/dupayAssets/facebook.png";
import insta from "../assets/dupayAssets/insta.png";
import linnkedIn from "../assets/dupayAssets/linkedin.png";
import youtube from "../assets/dupayAssets/youtube.png";
import googleplay from "../assets/dupayAssets/google play.png";
import appstore from "../assets/dupayAssets/app store.png";
import appGallery from "../assets/dupayAssets/app gallery.png";



const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <img src={dupayLogo} alt="dupayLogo" className="bg-dark" />
          <p>Your <span> money</span> , your way</p>
        </div>
        <div className="row">
          <div className="col-2">
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="col">
            <p>Terms and Conditions</p>
            <p>Fee and Limits (Key Fact Statement)</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="row">
          <div className="col bg-danger">
            <img src={facebook} alt="facebook" />
            <img src={x} alt="x"  />
            <img src={insta} alt="insta" />
            <img src={linnkedIn} alt="linnkedIn" />
            <img src={youtube} alt="youtube" />
          </div>
          <div className="col bg-info">
            <p>Download du Pay</p>
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
            <img src={appGallery} alt="appGallery" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
// facbook => <i class="bi bi-facebook"></i>
// x =><i class="bi bi-x-lg"></i>
// insta =><i class="bi bi-instagram"></i>
// linkedin=><i class="bi bi-linkedin"></i>
// youtube => <i class="bi bi-youtube"></i>