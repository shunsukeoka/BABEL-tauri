import { Tag, TagProps } from './Tag'

interface TagsProps {
    tags?: TagProps[]
}

export const Tags: React.FC<TagsProps> = ({ tags, ...props }: TagsProps) => (
    <div className="overflow-x-scroll scrollbar-hidden" {...props}>
        {tags &&
            tags.map((tag) => (
                <Tag
                    key={tag.label}
                    label={tag.label}
                    textColor={tag.textColor}
                    backgroundColor={tag.backgroundColor}
                />
            ))}
    </div>
)

Tags.defaultProps = {
    tags: [],
}
