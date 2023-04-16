import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App'
// import {Page2} from './Page2'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Home />
    {/* <App/> */}
    {/* <Page2/> */}
    </BrowserRouter>
  </React.StrictMode>,
)
