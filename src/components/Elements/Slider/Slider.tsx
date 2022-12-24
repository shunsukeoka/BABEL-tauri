import * as SliderPrimitive from '@radix-ui/react-slider'
import { styled } from '@/styles'

const StyledSliderRoot = styled(SliderPrimitive.Root, {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    '&[data-orientation=horizontal]': { height: 14 },
    '&[data-orientation=vertical]': {
        flexDirection: 'column',
        width: '14px',
        height: '100%',
    },
})

const StyledSliderTrack = styled(SliderPrimitive.Track, {
    backgroundColor: 'gainsboro',
    position: 'relative',
    flexGrow: 1,
    borderRadius: '8px',
    '&[data-orientation=horizontal]': { height: 2 },
    '&[data-orientation=vertical]': { width: 2 },
})

const StyledSliderRange = styled(SliderPrimitive.Range, {
    position: 'absolute',
    backgroundColor: '$secondaryLight',
    borderRadius: '9999px',
    '&[data-orientation=horizontal]': { height: '100%' },
    '&[data-orientation=vertical]': { width: '100%' },
})

const StyledSliderThumb = styled(SliderPrimitive.Thumb, {
    display: 'block',
    width: 14,
    height: 14,
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 1px 4px gray',

    '&:focus': {
        outline: 'none',
        borderColor: '$secondaryLight',
    },
})

export const Slider = ({ value, defaultValue, ...props }: SliderPrimitive.SliderProps) => {
    const values = value || defaultValue

    return (
        <StyledSliderRoot {...props}>
            <StyledSliderTrack>
                <StyledSliderRange />
            </StyledSliderTrack>
            {/* eslint-disable-next-line react/no-array-index-key */}
            {values !== undefined && values.map((_, i) => <StyledSliderThumb key={i} />)}
        </StyledSliderRoot>
    )
}
