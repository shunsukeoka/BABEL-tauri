import './assets/styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Reset } from 'styled-reset'
import { App } from '@/components/App'
// import { GlobalStyle } from '@/assets/styles/global-style'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)
