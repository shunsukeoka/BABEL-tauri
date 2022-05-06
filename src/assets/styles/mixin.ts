import { css } from 'styled-components'

const scrollbarHideen = css`
    -ms-overflow-style: none; // microsoft edge
    scrollbar-width: none; // firefox

    &::-webkit-scrollbar {
        display: none; // safari, chrome, etc...
    }
`

export const mixin = {
    scrollbarHideen,
}
