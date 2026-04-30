import dupayLogo from "../assets/dupayAssets/Logo.png"

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
<img src={dupayLogo} alt="dupayLogo" />
<p>Your <span> money</span> , your way</p>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>

  )
}

export default Footer
// facbook => <i class="bi bi-facebook"></i>
// x =><i class="bi bi-x-lg"></i>
// insta =><i class="bi bi-instagram"></i>
// linkedin=><i class="bi bi-linkedin"></i>
// youtube => <i class="bi bi-youtube"></i>