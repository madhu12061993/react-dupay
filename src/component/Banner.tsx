import banner from "../assets/dupayAssets/herophoneonlyx2_6622a213a6d81_5c2e6c3697.webp";
import "../css/banner.css";
import Qrcode from "../assets/dupayAssets/Qrcode.png";

const Banner = () => {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img src={banner} className="card-img" alt="banner" />
        <div className="card-img-overlay">
          <h5 className="card-title">Send money back home with du Pay</h5>
          <p className="card-text">Send money, pay bills, and manage your money—all in one app.</p>
          <div className="card">
            <div>
              <h3>df</h3>
              <p>df</p>
            </div>
            <div>
              <img src={Qrcode} alt="Qrcode" className="Qrcode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner