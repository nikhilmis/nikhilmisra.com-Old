<script>
    export let title, subheading, duration;
</script>

<div class="container">
    <section class="info">
        <h1>{title}</h1>
        {#if subheading}
            <p>{subheading}</p>
        {/if}
        {#if duration}
            <p>{duration}</p>
        {/if}
    </section>
    <div class="paragraph">
        <slot />
    </div>
</div>

<style>
    h1 {
        margin: 0;
    }

    .container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 80px;
        gap: 25px;
    }

    @media only screen and (max-width: 600px) {
        .container {
            flex-direction: column;
        }
    }
</style>
