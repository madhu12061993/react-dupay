import account from "../assets/dupayAssets/account.png";
import transaction from "../assets/dupayAssets/transaction.png";
import security from "../assets/dupayAssets/security.png";



const ExploreDupay = () => {
  return (
    <div>
      <div className="container">
        <h3>In case you need to know more</h3>
        <h5>Explore every detail of du Pay</h5>
        <div className="row row-cols-md-3">
          {/* col-1 */}
          <div className="col">
            <div className="card">
              <div>
                <img src={account} alt="account" />
              </div>
              <p className="card-title">Account</p>
              <p className="card-text">17 Topics</p>
            </div>
          </div>
          {/* col-2 */}
          <div className="col">
            <div className="card">
              <div>
                <img src={transaction} alt="transaction" />
              </div>
              <p className="card-title">Transaction</p>
              <p className="card-text">14 Topics</p>
            </div>
          </div>
          {/* col-3 */}
          <div className="col">
            <div className="card">
              <div>
                <img src={security} alt="security" />
              </div>
              <p className="card-title">Account Security</p>
              <p className="card-text">5 Topics</p>
            </div>
          </div>
          {/* col-4 */}
          <div className="col">
            <div className="card">
              <div>
                <img src={transaction} alt="transaction" />
              </div>
              <p className="card-title">Offers and Promotions</p>
              <p className="card-text">16 Topics</p>
            </div>
          </div>
          {/* col-5 */}
          <div className="col">
            <div className="card">
              <div>
                <img src={transaction} alt="transaction" />
              </div>
              <p className="card-title">Card</p>
              <p className="card-text">17 Topics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreDupay