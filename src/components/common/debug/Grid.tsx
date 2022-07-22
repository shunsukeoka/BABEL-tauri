import styled from 'styled-components'

/**
 * Props
 */
export interface DebugGridProps {
    size?: number
    color?: string
    opacity?: number
}

/**
 * Styled Component
 */
const StyledDebugGrid = styled.div<DebugGridProps>`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: linear-gradient(${(props) => props.color} 1px, transparent 1px),
        linear-gradient(to right, ${(props) => props.color} 1px, transparent 1px);
    background-size: ${(props) => `${props.size}px`};
    opacity: ${(props) => props.opacity};
`

/**
 * View Component
 */
const DebugGridView: React.VFC<DebugGridProps> = ({ ...props }: DebugGridProps) => <StyledDebugGrid {...props} />

/**
 * Default Props
 */
DebugGridView.defaultProps = {
    size: 8,
    color: '#f00',
    opacity: 0.3,
}

/**
 * Component
 */
const DebugGrid: React.VFC<DebugGridProps> = (props) => <DebugGridView {...props} />

/**
 * Export
 */
export { DebugGrid }
