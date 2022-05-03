import styled from 'styled-components'
import { Tag, TagProps } from './Tag'

/**
 * Props
 */
interface TagsProps {
    tags?: TagProps[]
}

/**
 * Styled Component
 */
const StyledTags = styled.div<TagsProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: scroll;
`

/**
 * View Component
 */
const TagsView: React.VFC<TagsProps> = ({ tags, ...props }: TagsProps) => (
    <StyledTags {...props}>
        {tags &&
            tags.map((tag) => (
                <Tag
                    key={tag.label}
                    label={tag.label}
                    textColor={tag.textColor}
                    backgroundColor={tag.backgroundColor}
                />
            ))}
    </StyledTags>
)

/**
 * Default Props
 */
TagsView.defaultProps = {
    tags: [],
}

/**
 * Component
 */
const Tags: React.VFC<TagsProps> = (props) => <TagsView {...props} />

/**
 * Export
 */
export { Tags }
