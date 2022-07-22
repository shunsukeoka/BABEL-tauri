import styled from 'styled-components'
import { mixin } from '../../../assets/styles/mixin'
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
    overflow-x: scroll;
    ${mixin.scrollbarHidden}
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
