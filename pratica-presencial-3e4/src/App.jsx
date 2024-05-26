import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Pag404 from './pages/Pag404'
import Login from './pages/Login'
import Layout from './components/Layout'
import Editar from './pages/Editar'
import Remover from './pages/Remover'

function App() {

  const {user} = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        {user.logado ? (
          <>
            <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path="/editar/:id" element={<Editar />} />
            <Route path='/register' element={<Register/>}/>
            <Route path="/remover/:id" element={<Remover />} />
            </Route>
          </>
        ) : (
          <>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
          </>
        )}
        <Route path='*' element={<Pag404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
