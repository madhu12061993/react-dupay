import visa from "../assets/dupayAssets/edgecard_0898bbfbcd.webp";


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
    <div className="card bg-dark text-white">
      <img src={visa} className="card-img" alt="visa" />
      <div className="card-img-overlay">
        <h5 className="card-title">Your payments, your way.</h5>
        <p className="card-text">Get your very own du Pay card</p>
        <div className="col-6">
          <div className="row row-cols-md-2 g-4">
            {pament.map((item, index) => (
              <div className="col-3" key={index}>

                <div className="card" >
                  <h5 className="card-title">{item.text}</h5>
                </div>
              </div>

            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentsWay
