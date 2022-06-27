import { Route, Routes as RoutesPages, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'


export function Routes() {
    return (
        <BrowserRouter>
            <RoutesPages>
                <Route path='/' element={<Home />} />
            </RoutesPages>
        </BrowserRouter>
    )
}