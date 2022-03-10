import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Svelte Component Test : Button', () => {
    it('ボタンのデフォルトのテキストはButton', () => {
        const { container } = render(Button);

        const button = container.querySelector('button');

        expect(button.textContent).toBe('Button');
    });
});
