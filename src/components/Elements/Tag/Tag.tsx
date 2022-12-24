import { styled } from '@/styles'

export interface TagProps {
    label?: string
    color: string
}

const StyledTag = styled('div', {
    display: 'inline-block',
    borderRadius: '8px',
    padding: '0 0.6em',
    textAlign: 'center',
    '&:not(:first-child)': {
        marginLeft: '$2',
    },
    '&>p': {
        fontSize: '10px',
        whiteSpace: 'nowrap',
        color: '$text',
    },
})

export const Tag: React.FC<TagProps> = ({ label, color }: TagProps) => (
    <StyledTag style={{ backgroundColor: color }}>
        <p>{label}</p>
    </StyledTag>
)

Tag.defaultProps = {
    label: 'Label',
}
