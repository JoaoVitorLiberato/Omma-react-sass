import { Link } from "react-router-dom";
import './style.scss'



export default function Nav(){
    return(
        <>
             <nav>
                <ul>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/receitas"}>Receitas</Link></li>
                    <li><Link to={"/contato"}>Contato</Link></li>
                </ul>
            </nav>
        </>
    );
}