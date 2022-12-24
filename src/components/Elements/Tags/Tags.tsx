import { styled } from '@/styles'
import { Tag, TagProps } from '../Tag'

interface TagsProps {
    tags?: TagProps[]
}

const StyledTags = styled('div', {
    overflowX: 'scroll',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
})

export const Tags: React.FC<TagsProps> = ({ tags }: TagsProps) => (
    <StyledTags>{tags && tags.map((tag) => <Tag key={tag.label} label={tag.label} color={tag.color} />)}</StyledTags>
)

Tags.defaultProps = {
    tags: [],
}
