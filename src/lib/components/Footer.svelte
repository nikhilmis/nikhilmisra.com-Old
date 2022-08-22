<script>
    const workComponents = import.meta.glob(`../../routes/work/*.svelte`);
    const work = Object.keys(workComponents)
        .filter((key) => !key.includes('__layout'))
        .map((route) => route.split('/')[4].replace('.svelte', ''));
</script>

<footer>
    <ul>
        {#each work as project}
            <li>
                <a href={project}>{project}</a>
            </li>
        {/each}
    </ul>
</footer>

<style>
    footer {
        margin-top: 25px;
        background: var(--black);
        color: var(--white);
        padding: 50px 0 50px 100px;
    }

    li {
        margin-bottom: 10px;
    }
</style>
