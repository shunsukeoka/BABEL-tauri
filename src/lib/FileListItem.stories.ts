import { action } from '@storybook/addon-actions';
import FileListItem from './FileListItem.svelte';

export default {
    title: 'Browser/FileListItem',
    components: FileListItem,
    argTypes: {},
    args: {
        fileName: 'storybook.wav',
        index: 0,
    },
};

export const Default = ({ fileName, index }) => ({
    Component: FileListItem,
    props: {
        fileInfo: {
            file_path: 'filelist/item/storybook.wav',
            file_name: fileName,
            file_size: 1000,
            mime: 'audio/wave',
            is_dir: true,
            is_file: false,
            is_symlink: false,
            readonly: false,
            created_t: '2022/01/01',
            modified_t: '2022/02/02',
            accessed_t: '2022/02/02',
        },
        index,
    },
    on: {
        click: action('clicked'),
    },
});
