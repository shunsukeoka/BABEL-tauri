import { createGlobalStyle } from 'styled-components'
import './font.scss'

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 13px;
        line-height: 1.230769230769231em;
        letter-spacing: 0.015em;
        color: #d0d5de;
        background-color: #080606;
    }

    .logo {
        font-family: Melete-UltraLight, sans-serif;
    }

    .font-roboto {
        font-family: Roboto, sans-serif;
    }

    .font-noto {
        font-family: 'Noto Sans JP', sans-serif;
    }
`
