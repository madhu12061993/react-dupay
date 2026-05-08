import passwordPattern from "../assets/dupayAssets/mobilepasswordpattern.webp";
import "../css/Trust.css";


const Trust = () => {
  return (
    <div className="container d-flex trustContainer">
      <div className="col-6">
        <span>Your trust is our priority</span>
        <p>du Pay is a secure mobile payment service, regulated by the Central Bank of the UAE. We use the highest-grade security measures to keep your transactions and data safe. Place your trust in du Pay to keep your financial information secure.</p>
      </div> 
       <div className="col trust ">
        <img src={passwordPattern} alt="passwordPattern" />
      </div> 
    </div>
  )
}

export default Trust