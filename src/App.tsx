import './App.css'
import Banner from './component/Banner'
import ExploreDupay from './component/ExploreDupay'
import Factor from './component/Factor'
import Footer from './component/Footer'
import Future from './component/Future'
import InternationalMoneyTransfer from './component/InternationalMoneyTransfer'
import MoneyTransfer from './component/MoneyTransfer'
import Navbar from './component/Navbar'
import PaymentsWay from './component/PaymentsWay'
import Trust from './component/Trust'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <MoneyTransfer />
      <PaymentsWay />
      <Trust />
      <Factor />
      <InternationalMoneyTransfer />
      <ExploreDupay />
      <Future />
      <Footer />

    </>
  )
}

export default App
