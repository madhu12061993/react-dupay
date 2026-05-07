import flag from "../assets/dupayAssets/Flags.png"
import "../css/Flag.css";



const Flag = () => {
    return (
        <div className="d-flex justify-content-center countryFlag">
            <img src={flag} alt="flag" />
        </div>
    )
}

export default Flag