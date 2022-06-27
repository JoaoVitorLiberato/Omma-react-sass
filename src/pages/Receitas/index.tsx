import Header from '../../components/Header';
import Nav from '../../components/Nav';
import './style.scss'

import Risoto from '../../assets/images/risoto.png'
import BoloDeBanana from '../../assets/images/bolo-banana.png'
import Tabule from '../../assets/images/tabule.png'
import Moqueca from '../../assets/images/moqueca.png'
import Footer from '../../components/Footer';



export default function Receitas() {
    return (
        <>
            <Header />
            <Nav />
            <main>
                <article>
                    <article className='content'>
                        <h3>risoto de abobora</h3>
                        <img src={Risoto} alt="Risoto" />
                        <article className='dicas'>
                            <p>fácil</p>
                            <p>para 4 pessoas</p>
                        </article>
                        <samp>
                            <li>
                                <strong>Ingredientes</strong>
                            </li>
                            <li> 1/2 kg de abóbora tipo kabotchá</li>
                            <li> 2 colheres (sopa) de azeite</li>
                            <li>1 cebola média bem picada</li>
                            <li>1 dente de alho picado</li>
                            <li> 3 colheres (sopa) de cebolinha verde picada</li>
                            <li>1/2 xícara (chá) de vinho banco seco</li>
                            <li> 2 xícaras (chá) de arroz arbóreo</li>
                            <li>2 tabletes de caldo de galinha</li>
                            <li> 1 colher (chá) de ervas finas</li>
                            <li> 1 colher (café) de gengibre</li>
                            <li> 1 folha de louro</li>
                            <li>2 colheres (sopa) de manteiga sem sal</li>
                            <li> 50 g de queijo parmesão ralado</li>
                            <li>Salsinha picada a gosto</li>
                            <li>Pimenta a gosto</li>
                            <br /><br />
                            <h2>video</h2>
                        </samp>
                        <article className='video'>

                            <iframe src="https://www.youtube.com/embed/Mxc3RQE4yAg"
                                title="YouTube video player" frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen className="videoRisoto"></iframe>
                        </article>
                        <samp className='preparo'>
                            <h2>Modo de Preparo</h2>

                            escasque a abóbora e corte-a em cubinhos pequenos. Reserve. Coloque o azeite em uma panela funda e
                            acrescente a cebola e o alho picados e leve ao fogo baixo até que a cebola e o alho murchem, mexendo sem
                            parar. Adicione a cebolinha verde e a abóbora picada e deixe refogar por uns 3 minutos, mexendo sempre.
                            Adicione o vinho branco e deixe cozinhar por uns 2 minutos. Adicione 2 xícaras de chá de água fervente e
                            os tabletes de caldo de galinha e deixe cozinhar para que a abóbora fique ligeiramente macia, por uns 10
                            minutos em fogo baixo. Aumente o fogo e acrescente o arroz arbóreo. Mexa bem e deixe levantar fervura.
                            Acrescente as ervas finas, o gengibre e a folha de louro. Diminua a chama do fogão e sempre mexendo
                            vá acrescentando água fervente quanto necessário. Leva em média de 15 a 20 minutos para
                            adquirir o ponto cremoso. Quanto estive al dente acrescente a manteiga e o queijo parmesão ralado.
                            Experimente o sal e acrescente pimenta a gosto. Desligue o fogo e tampe a panela. Deixe descansar por uns 5
                            minutos.Sirva regado com queijo parmesão ralado e salsinha picada.
                        </samp>
                    </article>
                    <aside>
                        <h4>receitas relacionada</h4>
                        <article className='extras'>
                            <img src={Moqueca} alt="Moqueca" />
                            <p>Moqueca</p>
                        </article>
                        <article className='extras'>
                            <img src={Tabule} alt="Tabule Tradicional" />
                            <p>Tabule Tradicional</p>
                        </article>
                        <article className='extras'>
                            <img src={BoloDeBanana} alt="Bolo de banana" />
                            <p>Bolo de banana</p>
                        </article>
                    </aside>
                </article>
            </main>
            <Footer />
        </>
    );
}