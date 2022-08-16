<div>
    <slot />
</div>

<style>
    div {
        max-width: 1920px;
        margin: 25px auto 0 auto;
        background: var(--offwhite);
    }

    @media only screen and (max-width: 768px) {
        div {
            margin: 0 25px;
        }
    }
</style>
