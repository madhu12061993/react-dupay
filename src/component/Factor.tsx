import safe from "../assets/dupayAssets/safe.png";
import secure from "../assets/dupayAssets/seccure.png";
import bank from "../assets/dupayAssets/bank.png";



const Factor = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex">
          <div>
            <img src={secure} alt="secure" />
          </div>
          <p>We use 2-factor authentication, fraud prevention, and a secure backend infrastructure.</p>
        </div>
        <div className="col d-flex">
          <div>
            <img src={safe} alt="safe" />
          </div>
          <p>By tying your account to your mobile number, we ensure you're always in control.</p>
        </div>
        <div className="col d-flex">
          <div>
            <img src={bank} alt="bank" />
          </div>
          <p>We're partnered with established financial institutions to ensure your money is safe.</p>
        </div>
      </div>
    </div>

  )
}

export default Factor