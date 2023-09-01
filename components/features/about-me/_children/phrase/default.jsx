import React from "react";
import "./index.css";

const Phrase = () => {
  return (
    <section className="phrase">
      <div className="phrase__wrapper">
        <div className="phrase__image">
          <div className="phrase__container"></div>
          <img
            src="https://static.wixstatic.com/media/2e2a49_140ba1569d4a49ba8cdfac408ede5aa4~mv2.png/v1/fill/w_370,h_496,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_140ba1569d4a49ba8cdfac408ede5aa4~mv2.png"
            alt=""
          />
        </div>
        <div className="phrase__content-description">
          <div className="phrase__description">
            <h2>Un camino de vida</h2>
            <p>
            "El camino hacia el éxito está lleno de desafíos, pero cada obstáculo superado te acerca más a tus metas. ¡Tú tienes la fuerza y la determinación para lograrlo!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phrase;
