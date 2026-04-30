import passwordPattern from "../assets/dupayAssets/mobilepasswordpattern.webp";


const Trust = () => {
  return (
    <div className="container d-flex">
      <div>
        <p>Your trust is our priority</p>
        <p>du Pay is a secure mobile payment service, regulated by the Central Bank of the UAE. We use the highest-grade security measures to keep your transactions and data safe. Place your trust in du Pay to keep your financial information secure.</p>
      </div>
      <div>
        <img src={passwordPattern} alt="passwordPattern" />
      </div>
    </div>
  )
}

export default Trust