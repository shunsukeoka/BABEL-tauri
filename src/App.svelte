<script lang="ts">
    import { dialog, tauri } from '@tauri-apps/api';
    import Button from './lib/base/Button.svelte';

    const onClickButton = async () => {
        const path = await dialog.open({ directory: true });
        await tauri.invoke('get_directory_info', { path });
    };
</script>

<main>
    <Button text="Button" on:click={onClickButton} />
</main>

<style lang="scss">
    main {
        padding: 1em;
        margin: 0 auto;
        text-align: center;
    }
</style>
