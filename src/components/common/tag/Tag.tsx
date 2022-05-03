import styled from 'styled-components'

/**
 * Props
 */
export interface TagProps {
    label?: string
    textColor?: string
    backgroundColor?: string
}

/**
 * Styled Component
 */
const StyledTag = styled.div<TagProps>`
    display: inline-block;
    padding: 0.2rem 0.5rem;
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
    border: 1px solid transparent;
    border-radius: 1rem;

    &:not(:first-child) {
        margin-left: 8px;
    }

    & > p {
        margin: 0;
        font-size: 10px;
        color: ${(props) => props.textColor};
        white-space: nowrap;
    }
`

/**
 * View Component
 */
const TagView: React.VFC<TagProps> = ({ label, ...props }: TagProps) => (
    <StyledTag {...props}>
        <p>{label}</p>
    </StyledTag>
)

/**
 * Default Props
 */
TagView.defaultProps = {
    label: 'Label',
    textColor: '#fff',
    backgroundColor: '#000',
}

/**
 * Component
 */
const Tag: React.VFC<TagProps> = (props) => <TagView {...props} />

/**
 * Export
 */
export { Tag }
