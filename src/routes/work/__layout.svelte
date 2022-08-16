<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
    <style>
        body {
            background-color: var(--offwhite);
            color: var(--black);
        }

        header {
            mix-blend-mode: exclusion;
            color: var(--white);
            z-index: 1;
        }

        ::selection {
            color: var(--white);
            background-color: var(--black);
        }

        .blur {
            text-shadow: var(--blur-text-shadow) rgba(0, 0, 0, var(--blur-text-opacity));
        }
    </style>
</svelte:head>

<Header />
<slot />
<Footer />
