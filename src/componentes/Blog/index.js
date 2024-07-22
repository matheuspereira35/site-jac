import "./Blog.css";
import Ebook from "../../assets/images/EBOOKS.png";
import BlogImg from "../../assets/images/BLOG.png";

const Blog = () => {
  return (
    <div className="principal-blog">
      <div className="cards-blog">
        <div className="cards-blog1">
          <div className="card1">
            <img src={BlogImg} alt="blog" />
          </div>
          <div className="card2">
            <div className="seta-card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
            <div className="text-breve-branco">
              <p>Em breve</p>
            </div>
          </div>
          <div className="card3">
            <div className="topo-card3">
              <p>Artigo publicado:</p>
            </div>
            <div className="link-artigo">
              <a
                href="https://peerw.org/index.php/journals/article/view/2052/1172"
                target="_blank"
                rel="noreferrer"
              >
                Análise Fílmica De “Tudo Em Todo Lugar...
              </a>
            </div>
            <div className="seta_card3">
              <a
                href="https://peerw.org/index.php/journals/article/view/2052/1172"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  fill="white"
                  class="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="cards-blog2">
          <div className="card4">
            <div className="seta-card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
            <div className="text-breve-branco">
              <p>Em breve</p>
            </div>
          </div>
          <div className="card5">
            <div className="seta-card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="black"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
            <div className="text-breve-preto">
              <p>Em breve</p>
            </div>
          </div>
          <div className="card5">
            <div className="seta-card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="black"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
            <div className="text-breve-preto">
              <p>Em breve</p>
            </div>
          </div>
          <div className="card4">
            <div className="seta-card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
            <div className="text-breve-branco">
              <p>Em breve</p>
            </div>
          </div>
        </div>
        <div className="cards-blog3">
          <div className="divisor-blog"></div>
        </div>
        <div className="cards-blog4">
          <div className="card1">
            <img src={Ebook} alt="ebook" />
          </div>
          <div className="card-inteligencia-emocional"></div>
          <div className="card-entendendo-ciclo"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
