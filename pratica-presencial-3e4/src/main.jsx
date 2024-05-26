import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { UsuarioContextProvider } from './contexts/UsuarioContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UsuarioContextProvider>
        <App />
      </UsuarioContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
