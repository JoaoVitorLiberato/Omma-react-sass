import Header from "../../components/Header";
import Nav from "../../components/Nav";
import './style.scss'


import BannerFormulario from '../../assets/images/banerform.png'
import Banner from '../../assets/images/fotoLadoForm.png'
import Footer from "../../components/Footer";

export default function Contato() {

    return (
        <>
            <Header />
            <Nav />
            <main>
                <h2 className="screen-reader-only">formulario</h2>
                <section className="banner" style={{
                    background: `url(${BannerFormulario})`,
                    backgroundRepeat: "no-repeat",
                    width: "1349px",
                    height: "500px",
                }}>
                    <h1>manda um alô ;)</h1>
                </section>
                <section className="conteudo">
                <h2 className="screen-reader-only">Entre em contato conosco</h2>
                <img src={Banner} alt="Banner entre em contato" />
                <form action="#" method="post">
                   <fieldset>
                        <legend>Contato</legend>
                        <div>
                            <label htmlFor="nome" className="screen-reader-only">Nome</label>
                            <input type="text" name="Nome" required placeholder="Nome completo" id="nome" />
                        </div>
                        <div>
                            <label htmlFor="email" className="screen-reader-only">Email</label>
                            <input type="email" name="Email" required placeholder="Seu melhor email :)" id="email" />
                        </div>
                        <div>
                            <label htmlFor="email" className="screen-reader-only">Email</label>
                            <textarea name="Mensagem" id="mensagem" placeholder="Abra seu coração <3"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Enviar" />
                        </div>
                    </fieldset> 
                </form>
                </section>
                <Footer/>
            </main>

        </>
    );

}