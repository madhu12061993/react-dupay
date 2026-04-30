import Qrcode from "../assets/dupayAssets/Qrcode.png";


const Future = () => {
  return (
    <div className="container-fluid">
       <div className=" row">
      <div className="col">
        <h4>Join the future of finance, today.</h4>
        <p>Scan to download the du Pay app. Compatible with iOS and Android.</p>
      </div>
      <div className="col">
        <img src={Qrcode} alt="Qrcode" />
      </div>
    </div>
    </div>
   
  )
}

export default Future