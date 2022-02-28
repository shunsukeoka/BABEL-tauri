<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let text: string = 'Button';

    export let width: string = null;

    export let disabled: boolean = false;

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch('click');
    };
</script>

<button class={disabled ? 'disabled' : ''} style={width ? `width: ${width};` : ''} {disabled} on:click={handleClick}
    >{text}</button
>

<style lang="scss">
    button {
        position: relative;
        display: inline-block;
        padding: 0.4em 2em;
        overflow: hidden;
        font-family: inherit;
        font-size: inherit;
        font-variant-numeric: tabular-nums;
        color: $text-light-color;
        cursor: pointer;
        background-color: $primary-dark-color;
        border: 2px solid $primary-dark-color;
        border-radius: 2em;
        outline: none;
        opacity: 1;
        transition: opacity 0.4s ease;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: '';
            background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat 50%;
            opacity: 0;
            transition: transform 0.3s, opacity 1s;
            transform: scale(10, 10);
        }

        &:active::after {
            opacity: 0.4;
            transition: 0s;
            transform: scale(0, 0);
        }

        &:hover {
            opacity: 0.6;
        }

        &.disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }
    }
</style>
