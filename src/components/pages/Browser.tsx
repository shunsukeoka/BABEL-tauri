import styled from 'styled-components'

/**
 * Styled Component
 */
const StyledBrowserPage = styled.section`
    width: 100%;
    padding: 0 16px;
`

/**
 * View Component
 */
const BrowserPageView: React.VFC = () => (
    <StyledBrowserPage>
        <h2>Browser Page</h2>
    </StyledBrowserPage>
)

/**
 * Component
 */
const BrowserPage: React.VFC = () => <BrowserPageView />

/**
 * Export
 */
export { BrowserPage }
