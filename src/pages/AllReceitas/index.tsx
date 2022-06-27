import Header from "../../components/Header";
import Nav from "../../components/Nav";

import './style.scss';

import Risoto from '../../assets/images/risoto.png';
import BoloDeBanana from '../../assets/images/bolo-banana.png';
import Tabule from '../../assets/images/tabule.png';
import Moqueca from '../../assets/images/moqueca.png';
import Ratatuile from '../../assets/images/ratatule.jpg';
import Footer from "../../components/Footer";

export default function AllReceitas() {
    return (
        <>
            <Header />
            <Nav />
            <main>
                <article className="receitas">
                    <article className="receitas--all">
                        <img src={Risoto} alt="risoto de abóbora" />
                        <span>Risoto de abóbora</span>
                        <button>Conferir</button>
                    </article>
                    <article className="receitas--all">
                        <img src={BoloDeBanana} alt="Bolo de banana" />
                        <span>Bolo de banana</span>
                        <button>Conferir</button>
                    </article>
                    <article className="receitas--all">
                        <img src={Tabule} alt="Tabule" />
                        <span>Tabule tradicional</span>
                        <button>Conferir</button>
                    </article>
                    <article className="receitas--all">
                        <img src={Moqueca} alt="Moqueca" />
                        <span>Risoto de abóbora</span>
                        <button>Conferir</button>
                    </article>
                    <article className="receitas--all">
                        <img src={Ratatuile} alt="Ratatuille" />
                        <span>Ratatuile</span>
                        <button>Conferir</button>
                    </article>
                    <article className="receitas--all">
                        <img src={Risoto} alt="risoto de abóbora" />
                        <span>Risoto de abóbora</span>
                        <button>Conferir</button>
                    </article>
                    <article className="receitas--all">
                        <img src={Moqueca} alt="Moqueca" />
                        <span>Risoto de abóbora</span>
                        <button>Conferir</button>
                    </article>
                    <article className="receitas--all">
                        <img src={Risoto} alt="risoto de abóbora" />
                        <span>Risoto de abóbora</span>
                        <button>Conferir</button>
                    </article>
                    <article className="receitas--all">
                        <img src={BoloDeBanana} alt="Bolo de banana" />
                        <span>Bolo de banana</span>
                        <button>Conferir</button>
                    </article>
                </article>
            </main>
            <Footer/>

        </>
    );
}