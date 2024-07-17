import "./Rodape.css";
import WppLogo from "../../assets/images/whatsapp.png";
import MailLogo from "../../assets/images/email-logo.png";
import LogoBranca from "../../assets/images/logo-branca.png";
import Linktree from "../../assets/images/logo-link.png";
import WppBranco from "../../assets/images/wpp-logo.png";
import InstaLogo from "../../assets/images/insta-logo.png";


const Rodape = () => {
  return (
    <div className="principal-rodape">
      <div className="topo-rodape">
        <div className="contatos-rodape">
          <div className="wpp-rodape">
            <img src={WppLogo} alt="wpp" />
            <p>+55 61 99208-1099</p>
          </div>
          <div className="mail-rodape">
            <img src={MailLogo} alt="wpp" />
            <p>Jacqueline.g.nunes@gmail.com</p>
          </div>
          <div className="form-rodape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
            <p>Preencher Google Forms</p>
          </div>
        </div>
        <div className="logo-rodape">
            <img src={LogoBranca} alt="logo"/>
        </div>
      </div>
      <div className="divisor-rodape"></div>
      <div className="rodape-rodape">
        <div className="politicas-termos">
            <a href="https://www.google.com/">Política de Privacidade</a>
            <a href="https://www.google.com/">Termos e condições</a>
            <a href="https://www.google.com/">© 2023 Jacqueline Guimarães ∙ Todos os direitos reservados</a>
        </div>
        <div className="icons-rodape">
            <div className="rodape-icons">
            <div>
            <img src={InstaLogo} alt="" className="insta-icon-rodape"/>
            </div>
            <div>
            <img src={MailLogo} alt="" className="mail-icon-rodape"/>
            </div>
            <div>
            <img src={WppBranco} alt="" className="insta-icon-rodape"/>
            </div>
            <div>
            <img src={Linktree} alt="" className="link-icon-rodape"/>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Rodape;
