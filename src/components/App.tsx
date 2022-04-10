import styled from 'styled-components'
import { Button } from './common/button/Button'

/**
 * View Component
 */
const AppView: React.VFC = () => (
    <main>
        <h1 className="title">BABEL</h1>
        <section>
            <Button label="Button" primary />
        </section>
    </main>
)

/**
 * Styled Component
 */

const StyledApp = styled(AppView)``

/**
 * Component
 */
const App: React.VFC = () => <StyledApp />

/**
 * Export
 */
export { App }
