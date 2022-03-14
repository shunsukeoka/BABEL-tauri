<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import FaFolder from 'svelte-icons/fa/FaFolder.svelte';
    import FaFile from 'svelte-icons/fa/FaFile.svelte';
    import type { IFIleInfo } from '../interfaces/file';

    let rowNumber;

    export let fileInfo: IFIleInfo = {
        file_path: '',
        file_name: '',
        file_size: 0,
        mime: '',
        is_dir: true,
        is_file: false,
        is_symlink: false,
        readonly: false,
        created_t: '',
        modified_t: '',
        accessed_t: '',
    };

    export let index: number = 0;

    $: rowNumber = index + 1;

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch('click', { item: fileInfo });
    };
</script>

<div class="filelist-item" on:click={handleClick}>
    <div class="filelist-item__element filelist-item__num">
        <p>{rowNumber}</p>
    </div>

    <div class="filelist-item__element filelist-item__icon">
        <p>
            {#if fileInfo.is_dir}
                <FaFolder />
            {:else if fileInfo.is_file}
                <FaFile />
            {/if}
        </p>
    </div>

    <div class="filelist-item__element filelist-item__name">
        <p>{fileInfo.file_name}</p>
    </div>
</div>

<style lang="scss" scoped>
    .filelist-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 40px;
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.2s ease;
        backface-visibility: hidden;

        &:hover {
            opacity: 0.6;
        }

        &__element {
            & > p {
                @include text-omit;
            }

            &:not(:first-child) {
                margin-left: 8px;
            }
        }

        &__num {
            width: 4%;
            text-align: right;
        }

        &__icon {
            width: 1em;
            height: 1em;

            p {
                width: 100%;
                height: 100%;
            }

            svg {
                vertical-align: middle;
            }
        }

        &__name {
            width: 80%;
            text-align: left;
        }
    }
</style>
