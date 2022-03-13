<script lang="ts">
    import { dialog, tauri } from '@tauri-apps/api';
    import Button from './lib/base/Button.svelte';
    import FileList from './lib/FileList.svelte';
    import type { IFIleInfo } from './interfaces/file';

    let fileList: IFIleInfo[] = [];

    const onClickButton = async () => {
        const path = await dialog.open({ directory: true });

        if (!path) return;

        const { success, data } = await tauri.invoke('get_directory_info', { path });

        if (success) fileList = data;
    };

    const onClickFileListItem = ({ detail }) => {
        console.log(detail.item);
    };
</script>

<main>
    <Button text="Button" on:click={onClickButton} />
    <FileList items={fileList} on:clickItem={onClickFileListItem} />
</main>

<style lang="scss">
    main {
        padding: 1em;
        margin: 0 auto;
        text-align: center;
    }
</style>
