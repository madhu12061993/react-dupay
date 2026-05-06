import visa from "../assets/dupayAssets/edgecard_0898bbfbcd.webp";
import "../css/PaymentsWay.css";


const pament = [
  {
    text: "Contactless payments",
  },
  {
    text: "Set card limits",
  },
  {
    text: "Block/unblock your card anytime",
  },
  {
    text: "Simplify cash withdrawals",
  }
]
const PaymentsWay = () => {
  return (
    <div className="container-fluid  paymentfluid ">
      <div className="container">
        <div className="col text-white payments ">
          <h5 className="card-title headding">Your payments, <br/> your way.</h5>
          <p className="card-text subHeading">Get your very own du Pay card</p>
          <div className="col-5">
            <div className="row row-cols-md-2  gx-3 cardBox">
              {pament.map((item, index) => (
                <div className="col" key={index}>

                  <div className="card h-100 " >
                    <p className="card-title px-3 py-2">{item.text}</p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
          <img src={visa} className="visaImage" alt="visa" />
    </div>

  )
}

export default PaymentsWay
