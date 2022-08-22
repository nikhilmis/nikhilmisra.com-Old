<script>
    export let src,
        alt,
        backgroundColor = 'var(--offwhite)';
</script>

<div style={`background-color: ${backgroundColor}`}>
    {#if src}
        <img {src} {alt} />
    {/if}
</div>

<style>
    div {
        width: 100%;
        padding: 50px 0 50px 0;
        display: flex;
        justify-content: center;
    }

    img {
        height: 250px;
    }
</style>
