<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import VirtualList from '@sveltejs/svelte-virtual-list';
    import FileListItem from './FileListItem.svelte';
    import type { IFIleInfo } from '../interfaces/file';

    export let items: IFIleInfo[] = [];

    const dispatch = createEventDispatcher();

    const onClickFilelistItem = ({ detail }) => {
        dispatch('clickItem', { item: detail.item });
    };
</script>

<div class="filelist">
    {#if items.length > 0}
        <VirtualList {items} height="100%" let:item>
            <FileListItem fileInfo={item} index={items.indexOf(item)} on:click={onClickFilelistItem} />
        </VirtualList>
    {/if}
</div>

<style lang="scss" scoped>
    .filelist {
        height: 500px;
        padding: 8px;
    }
</style>
