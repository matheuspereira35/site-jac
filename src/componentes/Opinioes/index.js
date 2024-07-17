import React from "react";
import CardsReview from "../ReviewsGoogle";
import "./Opinioes.css";

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
        <CardsReview />
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
