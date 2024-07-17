import "./Espaco.css";

const Espaco = () => {
  return (
    <div className="espaco-principal">
      <div className="topo-espaco">
        <h1>O espaço</h1>
      </div>
      <div className="presencial">
        <div className="divisor-presencial">
          <div className="endereco-norte">
            <div className="asa-norte">
              <h4>Asa Norte</h4>
              <div className="loc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pin-map"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                  />
                </svg>
                <div className="loc-text">
                  <p>Shopping ID</p>
                  <a
                    href="https://maps.app.goo.gl/V99mxENYgtX7sw3X9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google maps
                  </a>
                </div>
              </div>
            </div>
            <div className="div-loc-norte">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://maps.app.goo.gl/V99mxENYgtX7sw3X9"
                className="loc-norte"
              >
                Clique para ser redirecionado
              </a>
            </div>
          </div>
        </div>
        <div className="divisor-presencial">
          <div className="topo-presencial">
            <h1>Atendimento Presencial</h1>
          </div>
          <div className="endereco-sul">
            <div className="div-loc-sul">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://maps.app.goo.gl/qDwMQZnpSivMpLRi7"
                className="loc-sul"
              >
                Clique para ser redirecionado
              </a>
            </div>
            <div className="asa-sul">
              <h4>Asa Sul</h4>
              <div className="loc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pin-map"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                  />
                </svg>
                <div className="loc-text">
                  <p>Ed. San Marino</p>
                  <p>SEP Sul 707/907</p>
                  <a
                    href="https://maps.app.goo.gl/qDwMQZnpSivMpLRi7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="online">
        <div className="divisor-online-text">
          <div className="text-online">
            <h1>Atendimento Online</h1>
            <div className="topicos-online">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              <p>Acessibilidade</p>
            </div>
            <div className="topicos-online">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              <p>Flexibilidade</p>
            </div>
            <div className="topicos-online">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              <p>Segurança</p>
            </div>
            <div className="topicos-online">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              <p>Conforto</p>
            </div>
            <div className="topicos-online">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              <p>Conveniência</p>
            </div>
          </div>
        </div>
        <div className="divisor-online-cel">
            <div className="celular">
                <div className="img-cel">

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Espaco;
