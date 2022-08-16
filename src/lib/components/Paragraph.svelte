<script>
    export let indented = false;
</script>

<p class:indented>
    <mechanical-ragger>
        <slot />
    </mechanical-ragger>
</p>

<style>
    p {
        max-width: clamp(50ch, 60ch, 70ch);
        margin: var(--margin-space) 0;
    }

    p:first-child {
        margin-top: 0;
    }

    .indented {
        text-indent: 2ch;
    }
</style>
