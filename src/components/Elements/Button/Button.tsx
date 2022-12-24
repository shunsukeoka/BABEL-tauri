import type * as Stitches from '@stitches/react'
import { styled } from '@/styles'

const StyledButton = styled('button', {
    variants: {
        color: {
            primary: { backgroundColor: '$primaryMid' },
            secondary: { backgroundColor: '$secondaryMid' },
        },
        size: {
            small: { fontSize: '10px' },
            medium: { fontSize: '14px' },
            large: { fontSize: '18px' },
        },
    },
    display: 'inline-block',
    padding: '0.6em 1em',
    fontFamily: '$main',
    color: '$text',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    opacity: 1,
    transition: '.4s opacity ease',
    backfaceVisibility: 'hidden',
    '&:hover': {
        opacity: 0.8,
    },
})

interface ButtonProps {
    label: string
    variants: Stitches.VariantProps<typeof StyledButton>
    onClick?: () => void
}

export const Button = ({ label, variants, onClick }: ButtonProps) => (
    <StyledButton color={variants.color} size={variants.size} onClick={onClick}>
        {label}
    </StyledButton>
)
