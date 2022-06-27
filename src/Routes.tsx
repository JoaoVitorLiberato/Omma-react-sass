import { Route, Routes as RoutesPages, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AllReceitas from './pages/AllReceitas'
import Contato from './pages/Contacts/index';
import Receitas from './pages/Receitas/index';


export function Routes() {
    return (
        <BrowserRouter>
            <RoutesPages>
                <Route path='/' element={<Home />} />
                <Route path='/receitas' element={<Receitas/>} />
                <Route path='/contato' element={<Contato />} />
                
            </RoutesPages>
        </BrowserRouter>
    )
}