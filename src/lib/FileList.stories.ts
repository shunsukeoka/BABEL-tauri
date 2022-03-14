import { action } from '@storybook/addon-actions';
import FileList from './FileList.svelte';

export default {
    title: 'Browser/FileList',
    components: FileList,
    argTypes: {},
    args: {
        items: [
            {
                file_name: 'storybook',
                is_dir: true,
                is_file: false,
            },
            {
                file_name: 'storybook.wav',
                is_dir: false,
                is_file: true,
            },
            {
                file_name: 'ストーリーブック.wav',
                is_dir: false,
                is_file: true,
            },
            {
                file_name:
                    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミー.wav',
                is_dir: true,
                is_file: false,
            },
        ],
    },
};

export const Default = ({ items }) => ({
    Component: FileList,
    props: { items },
    on: {
        click: action('clicked'),
    },
});
