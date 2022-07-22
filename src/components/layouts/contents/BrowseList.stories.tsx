import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MdOutlineFolder } from 'react-icons/md'
import { BrowseList } from './BrowseList'

export default {
    title: 'Layouts/Contents/BrowseList',
    component: BrowseList,
} as ComponentMeta<typeof BrowseList>

export const Default: ComponentStoryObj<typeof BrowseList> = {
    args: {
        icon: <MdOutlineFolder />,
        title: 'LOCAL DIRECTORIES',
        browseList: [
            { name: 'Sample Magic - SM08 NU RAVE' },
            { name: 'Vengeance Dance Explosion Vol.1' },
            { name: 'APASHE SAMPLE PACK 1.0' },
            { name: 'Electro Glitch Essentials' },
        ],
    },
}
