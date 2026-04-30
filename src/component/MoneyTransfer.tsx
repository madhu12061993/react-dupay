import mobilehand from "../assets/dupayAssets/mobilehand.webp"
import svgAX from "../assets/dupayAssets/svgexport-3.png";
import global from "../assets/dupayAssets/svgexport-4.png";
import mobile from "../assets/dupayAssets/svgexport-5.png";
import mobileChat from "../assets/dupayAssets/mobilechat.webp";
import mobilepayment from "../assets/dupayAssets/mobile-hand2.webp";


const MoneyTransfer = () => {
  return (
    <div className="container">
      <p>Here’s what we offer</p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* 1 col */}
        <div className="col">
          <div className="card h-100">
            <img src={mobilehand} className="card-img-top" alt="mobilehand" />
          </div>
        </div>
        {/* 2 col */}
        <div className="col">
          <div className="card h-100">
            <img src={svgAX} className="card-img-top" alt="svgAX" />
            <h5 className="card-title">A multilingual experience</h5>
            <p className="card-text">Language barriers are a thing of the past. Navigate our app in Arabic, English, Hindi, Malayalam, Tamil and Bangla.</p>
          </div>
        </div>
        {/* 3 col */}
        <div className="col">
          <div className="card h-100">
            <img src={global} className="card-img-top" alt="global" />
            <h5 className="card-title">Instant money transfer</h5>
            <p className="card-text"> Send money right away, anytime to more than 200 destinations around the world, from your phone. It’s fast, easy, and always there when you need it the most.</p>
          </div>
        </div>
        {/* 4 col */}
        <div className="col">
          <div className="card h-100">
            <img src={mobileChat} className="card-img-top" alt="mobileChat" />
          </div>
        </div>
        {/* 5 col */}
        <div className="col">
          <div className="card h-100">
            <img src={mobilepayment} className="card-img-top" alt="mobilepayment" />
          </div>
        </div>
        {/* 6 col */}
        <div className="col">
          <div className="card h-100">
            <img src={mobile}className="card-img-top" alt="mobile" />
            <h5 className="card-title">Payments made simple</h5>
            <p className="card-text">Simplify your everyday life with our app. Effortlessly pay your bills or top-up your mobile in just few steps.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyTransfer