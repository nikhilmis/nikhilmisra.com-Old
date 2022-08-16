<script>
    import { writable } from 'svelte/store';
    export let images,
        uniqueTitle = 'images';
    const lastImage = images.length - 1;

    let currentImage = 0;
    let carouselWidth = 0;
    let cursorIsNext = false;
    let coords = writable({ x: 0 });

    coords.subscribe((value) => {
        cursorIsNext = value.x > carouselWidth / 2;
    });

    const mouseMoveHandler = (e) => coords.set({ x: e.clientX });

    const nextImage = () => {
        currentImage === lastImage ? (currentImage = 0) : (currentImage += 1);
    };

    const prevImage = () => {
        currentImage === 0 ? (currentImage = lastImage) : (currentImage -= 1);
    };

    const imageId = (index) => `${uniqueTitle}-${index}`;
    const imageAnchor = (index) => `#${imageId(index)}`;
</script>

<a
    class={`clickLayer ${cursorIsNext ? 'nextCursor' : 'prevCursor'}`}
    href={imageAnchor(currentImage)}
    bind:clientWidth={carouselWidth}
    on:mousemove={mouseMoveHandler}
    on:click={cursorIsNext ? nextImage : prevImage}
>
    <div>
        {#each images as image, index}
            <img src={image.src} alt={image.alt} id={imageId(index)} loading="lazy" />
        {/each}
    </div>
</a>
<nav>
    {#each images as _image, index}
        <a
            href={imageAnchor(index)}
            class:selected={currentImage === index}
            on:click={() => (currentImage = index)}>•</a
        >
    {/each}
</nav>

<style>
    div {
        display: flex;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        overflow: hidden;
    }

    img {
        width: 100%;
        flex-shrink: 0;
    }

    nav {
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    nav a {
        font-size: 48px;
        color: grey;
    }

    nav a.selected {
        color: black;
    }

    .clickLayer {
        display: block;
    }

    .prevCursor {
        cursor: url('/prev.svg'), auto;
    }

    .nextCursor {
        cursor: url('/next.svg'), auto;
    }
</style>
