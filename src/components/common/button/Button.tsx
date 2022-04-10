import React from 'react'
import styled from 'styled-components'

/**
 * Props
 */
interface ButtonProps {
    label: string
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
}

/**
 * View Component
 */
const ButtonView: React.VFC<ButtonProps> = ({ label, primary, ...props }: ButtonProps) => (
    <button type="button" {...props}>
        {label}
    </button>
)

/**
 * Default Props
 */
ButtonView.defaultProps = {
    primary: true,
    size: 'medium',
    onClick: () => {},
}

/**
 * Styled Component
 */
const StyledButton = styled(ButtonView)<ButtonProps>`
    display: inline-block;
    padding: ${(props) => {
        switch (props?.size) {
            case 'small':
                return '10px 16px'
            case 'medium':
                return '11px 20px'
            case 'large':
                return '12px 24px'
            default:
                return '11px 20px'
        }
    }};
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: ${(props) => {
        switch (props?.size) {
            case 'small':
                return '12px'
            case 'medium':
                return '14px'
            case 'large':
                return '16px'
            default:
                return '14px'
        }
    }};
    font-weight: 700;
    line-height: 1;
    color: ${(props) => (props?.primary ? 'white' : '#333')};
    cursor: pointer;
    background-color: ${(props) => (props?.primary ? '#1ea7fd' : 'transparent')};
    border: 0;
    border-radius: 3em;
    box-shadow: rgba(0 0 0 / 15%) 0 0 0 1px inset;
`

/**
 * Container Component
 */
const Button: React.VFC<ButtonProps> = (props) => <StyledButton {...props} />

/**
 * Export
 */
export { Button }
