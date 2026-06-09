import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import iconUrl from './img/icon.jpeg'

// Brand favicon
const link = document.querySelector("link[rel='icon']") || document.createElement('link')
link.rel = 'icon'
link.href = iconUrl
document.head.appendChild(link)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
