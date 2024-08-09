
import React from "react";
import "./Opinioes.css";
import Carousel from "../Carousel";

const Opinioes = () => {
  return (
    <div className="principal-opinioes">
      <div className="bg-opinioes1">
        <div className="titulo-opinioes">
          <div>
            <h1>Opiniões de</h1>
            <h1>pacientes</h1>
          </div>
        </div>
        <div className="cards-carousel">
          <div className="card-carousel">
        <Carousel />
          </div>
        </div>
        <div className="btn-agendar">
          <div>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">AGENDAR</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinioes;