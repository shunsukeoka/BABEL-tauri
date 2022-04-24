import styled from 'styled-components'

/**
 * Props
 */
interface TooltipContainerProps {
    text?: string
    children: React.ReactNode
}

/**
 * View Component
 */
const TooltipContainerView: React.FC<TooltipContainerProps> = ({ text, children, ...props }: TooltipContainerProps) => (
    <div
        className="tooltip-container"
        {...props}
        onMouseEnter={(event) => {
            const tooltip = event.currentTarget.querySelector('.tooltip')
            if (tooltip) tooltip.setAttribute('open', '')
        }}
        onMouseLeave={(event) => {
            const tooltip = event.currentTarget.querySelector('.tooltip')
            if (tooltip) tooltip.removeAttribute('open')
        }}
    >
        <sp-tooltip class="tooltip" placement="top">
            {text}
        </sp-tooltip>
        {children}
    </div>
)

/**
 * Default Props
 */
TooltipContainerView.defaultProps = {
    text: '',
}

/**
 * Styled Component
 */
const StyledTooltipContainer = styled(TooltipContainerView)`
    position: relative;
    width: max-content;

    .tooltip {
        position: absolute;
        top: -100%;
        left: 50%;
        z-index: 1;
        width: max-content;
        transform: translateX(-50%) translateY(-6px);
    }
`

/**
 * Component
 */
const TooltipContainer: React.VFC<TooltipContainerProps> = (props) => <StyledTooltipContainer {...props} />

/**
 * Export
 */
export { TooltipContainer }
