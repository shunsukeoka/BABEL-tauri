import { render } from '@testing-library/svelte';
import FileList from './FileList.svelte';

describe('Svelte Component Test : FileList', () => {
    it('fileListの配列に1つも要素が入っていなかった場合、リストを表示しない', () => {
        const { container } = render(FileList, {
            items: [],
        });

        const fileList = container.querySelector('.filelist');

        expect(fileList.childElementCount).toBe(0);
    });
});
