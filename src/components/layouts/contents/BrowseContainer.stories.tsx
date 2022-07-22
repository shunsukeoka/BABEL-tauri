import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { BrowseContainer } from './BrowseContainer'

export default {
    title: 'Layouts/Contents/BrowseContainer',
    component: BrowseContainer,
} as ComponentMeta<typeof BrowseContainer>

export const Default: ComponentStoryObj<typeof BrowseContainer> = {
    args: {
        favorites: [{ name: 'Sample Magic - SM08 NU RAVE' }, { name: 'Vengeance Dance Explosion Vol.1' }],
        directories: [
            { name: 'Sample Magic - SM08 NU RAVE' },
            { name: 'Vengeance Dance Explosion Vol.1' },
            { name: 'APASHE SAMPLE PACK 1.0' },
            { name: 'Electro Glitch Essentials' },
        ],
    },
}
