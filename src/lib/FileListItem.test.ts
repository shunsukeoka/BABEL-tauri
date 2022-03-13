import { render } from '@testing-library/svelte';
import FileListItem from './FileListItem.svelte';

describe('Svelte Component Test : FileListItem', () => {
    const { container } = render(FileListItem, {
        fileInfo: {
            file_path: '/a/b/c/d.wav',
            file_name: 'd.wav',
            file_size: 1000,
            mime: 'audio/wave',
            is_dir: true,
            is_file: false,
            is_symlink: false,
            readonly: false,
            created_t: '2022/01/01',
            modified_t: '2022/01/01',
            accessed_t: '2022/01/01',
        },
        index: 0,
    });
    const fileListItem = container.querySelector('.filelist-item');
    const fileListItemNum = container.querySelector('.filelist-item__num');
    const fileListItemName = container.querySelector('.filelist-item__name');

    it('.filelist-itemの要素が存在する', () => {
        expect(fileListItem).toBeTruthy();
    });

    it('.filelist-item__numにインデックス番号+1を表示', () => {
        expect(fileListItemNum.textContent).toBe('1');
    });

    it('.filelist-item__nameにファイル名を表示', () => {
        expect(fileListItemName.textContent).toBe('d.wav');
    });
});
