// import styled from 'styled-components'

import styled from '@emotion/styled'
import clsx from 'clsx'

export interface TagProps {
    label?: string
    textColor?: string
    backgroundColor?: string
}

const StyledTag = styled.div<TagProps>`
    background-color: ${(props) => props.backgroundColor};

    & > p {
        color: ${(props) => props.textColor};
    }
`

export const Tag: React.FC<TagProps> = ({ label, textColor, backgroundColor, ...props }: TagProps) => (
    <StyledTag
        className={clsx('inline-block rounded-2xl px-3 py-1 text-center not-first-child:ml-2')}
        textColor={textColor}
        backgroundColor={backgroundColor}
        {...props}
    >
        <p className={clsx('whitespace-nowrap text-xs')}>{label}</p>
    </StyledTag>
)

Tag.defaultProps = {
    label: 'Label',
    textColor: '#fff',
    backgroundColor: '#000',
}
