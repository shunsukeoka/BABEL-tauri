import './assets/styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import '@spectrum-web-components/bundle/elements'
import { App } from './components/App'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
