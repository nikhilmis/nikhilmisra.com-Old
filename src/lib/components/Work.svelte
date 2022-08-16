<script>
    import { writable } from 'svelte/store';
    export let projects = [];
    let coords = writable({ x: 0, y: 0 });
    let videoIsPlaying = false;
    const mouseMoveHandler = (e) => coords.set({ x: e.clientX, y: e.clientY });
    const position = (x, y) => `top: ${y}px; left: ${x}px`;
    const endVideoHover = (videoId) => {
        videoIsPlaying = false;
        const video = document.querySelector(`#${videoId}`);
        if (video) video.currentTime = 0;
    };
</script>

<ul class="work">
    {#each projects as project}
        {@const isVideo = project.asset.type === 'Video'}
        {@const videoId = `${project.link}-video`}
        <a
            href={`/work/${project.link}`}
            on:mousemove={mouseMoveHandler}
            on:mouseenter={isVideo && (videoIsPlaying = true)}
            on:mouseleave={isVideo && endVideoHover(videoId)}
        >
            <li class="grid">
                <div>
                    <span class="underlined animated-underline">{project.title}</span>
                </div>
                <div>
                    <span class="underlined animated-underline">{project.keywords}</span>
                </div>
                <div>
                    <span class="underlined animated-underline">{project.year}</span>
                </div>
            </li>

            {#if project.asset.type === 'Image'}
                <img
                    src={project.asset.src}
                    alt={project.asset.alt}
                    style={position($coords.x, $coords.y)}
                />
            {/if}
            {#if isVideo}
                <video
                    id={videoId}
                    loop
                    muted
                    autoplay={videoIsPlaying ? 'true' : 'false'}
                    src={project.asset.src}
                    style={position($coords.x, $coords.y)}
                />
            {/if}
        </a>
    {/each}
</ul>

<style>
    .work {
        width: 100%;
        margin-top: 100px;
        overflow: hidden;
        user-select: none;
    }

    .work a {
        display: block;
        padding: 30px 0;
    }

    .work img,
    .work video {
        width: 1100px;
        position: fixed;
        top: 200px;
        left: 400px;
        opacity: 0;
        z-index: -1;
        transition: opacity 600ms;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    .work a:hover img,
    .work a:hover video {
        opacity: 0.6;
    }

    .grid:hover .underlined.animated-underline:after {
        width: 100%;
        background: var(--white);
    }

    .work a {
        transition: filter 0.1s;
    }

    .work:hover a {
        opacity: 0.5;
        filter: blur(3px);
    }

    .work a:hover {
        opacity: 1;
        filter: unset;
    }
</style>
