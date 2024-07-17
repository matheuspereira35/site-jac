import "./Home.css";
import React from "react";
import LogoInsta from "../../assets/images/insta-logo.png";
import LogoMail from "../../assets/images/email-logo.png";
import LogoWpp from "../../assets/images/wpp-logo.png";
import LogoLink from "../../assets/images/logo-link.png";
import LogoBranca from "../../assets/images/logo-branca.png";
import VideoBg from "../../assets/images/video-bg.mp4";

const Home = ({ scrollToSobreMim, scrollToPsicoterapia, scrollToEspaco, scrollToContatos, scrollToBlog }) => {
  return (
    <div className="home">
      <div className="bg-video">
        <video src={VideoBg} autoPlay loop muted />
      </div>
      <div className="logo-btns">
        <div className="divisor1">
          <div className="logo">
            <img src={LogoBranca} alt="logo" />
          </div>
        </div>
        <div className="divisor2">
          <div className="botoes">
            <button onClick={scrollToSobreMim}>SOBRE MIM</button>
            <button onClick={scrollToPsicoterapia}>PSICOTERAPIA</button>
            <button onClick={scrollToEspaco}>ESPAÇO</button>
            <button onClick={scrollToContatos}>ENTRE EM CONTATO</button>
            <button onClick={scrollToBlog}>BLOG: EM BREVE</button>
          </div>
        </div>
      </div>
      <div className="contato">
        <div className="contatos">
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com">
            <img className="insta" src={LogoInsta} alt="insta" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:ronivamronaldo@gmail.com?subject=Teste de Email"
          >
            <img className="mail" src={LogoMail} alt="email" />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com">
            <img className="insta" src={LogoWpp} alt="wpp" />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com">
            <img className="linktree" src={LogoLink} alt="link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
