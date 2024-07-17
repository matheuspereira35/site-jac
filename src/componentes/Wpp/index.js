import "./Wpp.css";
import WppLogo from "../../assets/images/whatsapp.png";

const Wpp = () => {
  return (
    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
      <div className="wpp-logo">
        <div className="wpp">
          <img src={WppLogo} alt="wpp" />
        </div>
      </div>
    </a>
  );
};

export default Wpp;
