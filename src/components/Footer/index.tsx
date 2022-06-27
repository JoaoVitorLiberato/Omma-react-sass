import Logo from '../../assets/images/logo.png'
import './style.scss'

export default function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Logo da pagina omma" />
            <p>&copy; omma - Todos os direitos reservados são a vocês.</p>
        </footer>
    );
}