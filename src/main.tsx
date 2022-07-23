import './assets/styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Reset } from 'styled-reset'
import { App } from './components/App'
// import { DebugGrid } from './components/common/debug/Grid'
import { GlobalStyle } from './assets/styles/global-style'

ReactDOM.render(
    <React.StrictMode>
        <Reset />
        {/* <DebugGrid /> */}
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)
