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
            if (tooltip) tooltip.classList.add('open')
        }}
        onMouseLeave={(event) => {
            const tooltip = event.currentTarget.querySelector('.tooltip')
            if (tooltip) tooltip.classList.remove('open')
        }}
    >
        <div className="tooltip">
            <div className="tooltip-inner">{text}</div>
        </div>
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
        display: none;
        width: max-content;
        transform: translateX(-50%) translateY(-13px);

        &.open {
            display: block;
        }

        .tooltip-inner {
            position: relative;
            box-sizing: border-box;
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 6px 10px;
            font-size: 10px;
            color: #fff;
            text-align: center;
            background-color: #000;
            border-radius: 4px;

            &::after {
                position: absolute;
                bottom: -7px;
                left: 50%;
                width: 0;
                height: 0;
                content: '';
                border-color: #000 transparent transparent;
                border-style: solid;
                border-width: 6.9px 4px 0;
                transform: translateX(-50%);
            }
        }
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
