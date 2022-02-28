<script lang="ts">
    import { invoke } from '@tauri-apps/api/tauri';
    import Button from './lib/base/Button.svelte';

    const onClickButton = async () => {
        await invoke('my_custom_command');
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
