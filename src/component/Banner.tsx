import banner from "../assets/dupayAssets/herophoneonlyx2_6622a213a6d81_5c2e6c3697.webp";
import "../css/banner.css";
import Qrcode from "../assets/dupayAssets/Qrcode.png";

const Banner = () => {
  return (
    <div className="container-fluid position-relative moneyBackground"> 
      <div className="container ">
       <div className="row">
          <div className="col content">
            <h5 className="card-title bannerTitle text-white">Send money back <br />home with du Pay</h5>
            <p className="card-text bannerText text-white">Send money, pay bills, and manage your money—all in one app.</p>
            <div className="card bg-transparent contentCard rounded-4 border border-white-300/20">
              <div className="d-flex ">
                <div className="col-9 CardText">
                  <p className="text-white fw-bold">Try it out!</p>
                  <span className="text-white">Scan to download app, compatible with iOS and Android</span>
                </div>
                <div className="col-3">
                  <img src={Qrcode} alt="Qrcode" className="Qrcode" />
                </div>
              </div>
            </div>
          </div>
          <div className="col banner">
            <div className="circle"></div>
            <img src={banner} className="card-img " alt="banner" />
          </div>
        </div> 

      </div>
    </div>
  )
}

export default Banner
{/* <div className="card  text-white">
        <img src={banner} className="card-img bannercard-img" alt="banner" />
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
      </div> */}