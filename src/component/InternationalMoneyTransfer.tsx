    import moneyTransfer from "../assets/dupayAssets/mobilehand3.webp";
    import "../css/InternationalMoneyTransfer.css";


const InternationalMoneyTransfer = () => {
  return (
    <div className="container InterNational">
      <div className="row">
      <div className="col-6 inter">
        <h3>Get started in 3 simple steps</h3>
        <ul>
          <li>Download the du Pay app.</li>
          <li>Keep your Emirates ID handy and complete the simple verification.</li>
          <li>Add money into your wallet through your inward bank transfer or via our network of payment machines.</li>
        </ul>
        <p>You are now ready to send money nearly anywhere with du Pay.</p>
      </div>
      <div className="col interImg">
        <img src={moneyTransfer} alt="InternationalMoneyTransfer" />
      </div>
      </div>
    </div>
  )
}

export default InternationalMoneyTransfer