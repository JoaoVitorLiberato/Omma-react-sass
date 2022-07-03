import './style.scss'

import Footer from "../../components/Footer";
import Header from "../../components/Header"
import Nav from "../../components/Nav"
import ReceitaRisoto from "../Receitas";


import BannerMain from '../../assets/images/baner-index.jpg'
import Risoto from '../../assets/images/risoto.png'
import BoloDeBanana from '../../assets/images/bolo-banana.png'
import Tabule from '../../assets/images/tabule.png'
import BannerFooter from '../../assets/images/baner-roda-index.jpg'


export default function Home() {
    return (
        <>
            <Header />
            <Nav />
            <main>
                <div className="bannerIndex">
                    <img src={BannerMain} alt="Banner index" />
                    <h2>Receitas <br /> feitas com afeto.</h2>
                </div>
                <section>
                    <h2>Receitas da semana</h2>
                    <article className="receitas">
                        <article className="receitas--all">
                            <img src={Risoto} alt="risoto de abóbora" />
                            <span>Risoto de abóbora</span>
                            <button>Conferir</button>
                        </article>
                        <article className="receitas--all">
                            <img src={BoloDeBanana} alt="Bolo de Banana" />
                            <span>Bolo de banana</span>
                            <button>Conferir</button>
                        </article>
                        <article className="receitas--all">
                            <img src={Tabule} alt="Tabule" />
                            <span>Tabule tradicional</span>
                            <button>Conferir</button>
                        </article>
                    </article>
                </section>
                <section className="sectionRodape" style={{
                    backgroundImage: `url(${BannerFooter})`, 
                    width: "100%",
                    height: "750px",
                    backgroundRepeat: "no-repeat",
                    margin: "0",
                    display: "fixed",
                    
                }}>
                    <h3>Comer é viver</h3>
                    <p >
                        Receitas preparadas com muito carinho, para que você possa sentir o prazer de preprarar uma
                        deliciosa refeição para sua familia.
                        Todas as receitas terá a lista de ingrediente indicando tudo que você precisa, além disso,
                        terá as instruções de preparo.
                    </p>
                </section>
            </main>
            <Footer/>
        </>
    );

}    