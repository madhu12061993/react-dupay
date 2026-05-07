import Qrcode from "../assets/dupayAssets/Qrcode.png";
import "../css/Future.css";


const Future = () => {
  return (
    <div className="container-fluid d-flex justify-content-center futureToday ">
      <div>
        <h4>Join the future of finance, <br/> <span> today. </span></h4>
        <p>Scan to download the du Pay app. Compatible with iOS and <br/> <span> Android.</span></p>
      </div>
      <div >
        <img src={Qrcode} alt="Qrcode" />
      </div>
    </div>

  )
}

export default Future