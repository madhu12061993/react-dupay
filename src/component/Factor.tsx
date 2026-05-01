import safe from "../assets/dupayAssets/safe.png";
import secure from "../assets/dupayAssets/seccure.png";
import bank from "../assets/dupayAssets/bank.png";


const data = [
  {
    text: "We use 2-factor authentication, fraud prevention, and a secure backend infrastructure.",
    img: secure,
  },
  {
    text: "By tying your account to your mobile number, we ensure you're always in control.",
    img: safe,
  }, {
    text: "We're partnered with established financial institutions to ensure your money is safe.",
    img: bank,
  }
];

const Factor = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col d-flex" key={index}>
            <div>
              <img src={item.img} alt="secure" />
            </div>
            <p> {item.text}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Factor;

