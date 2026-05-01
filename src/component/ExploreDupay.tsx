import account from "../assets/dupayAssets/account.png";
import transaction from "../assets/dupayAssets/transaction.png";
import security from "../assets/dupayAssets/security.png";

const Account = [
  {
    img:account,
    title:"Account",
    subTitle:"17 Topics",
  } ,
   {
    img:transaction,
    title:"Transaction",
    subTitle:"14 Topics",
  },
   {
    img:security,
    title:"Account Security",
    subTitle:"5 Topics",
  }, {
    img:transaction,
    title:"Offers and Promotions",
    subTitle:"16 Topics",
  }, {
    img:transaction,
    title:"Card",
    subTitle:"17 Topics",
  }
]

const ExploreDupay = () => {
  return (
    <div>
      <div className="container">
        <h3>In case you need to know more</h3>
        <h5>Explore every detail of du Pay</h5>
        <div className="row row-cols-md-3">
         {Account.map((item , index) => (
           <div className="col" key={index}>
            <div className="card">
              <div>
                <img src={item.img} alt="account" />
              </div>
              <p className="card-title">{item.title}</p>
              <p className="card-text">{item.subTitle}</p>
            </div>
          </div>
         ))}
          
        </div>
      </div>
    </div>
  )
}

export default ExploreDupay