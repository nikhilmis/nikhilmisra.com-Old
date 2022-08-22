<script>
    import Paragraph from '$lib/components/Paragraph.svelte';
    import Work from '$lib/components/Work.svelte';

    let isBioExpanded = false;

    const expandedBioStyle = (isBioExpanded) =>
        `max-height: ${isBioExpanded ? '500px' : 0}; opacity: ${isBioExpanded ? 1 : 0}`;

    const expandBioHandler = () => {
        isBioExpanded = !isBioExpanded;
    };
</script>

<div class="bodyWrapper">
    <header class="grid">
        <div class="bio">
            <Paragraph>
                My name is <span class="underlined animated-underline">Nikhil Misra</span>. I'm a
                designer and artist focusing on design systems, identities, editorial, interaction,
                and interesting ideas.
            </Paragraph>
            <div class="expanded-bio" style={expandedBioStyle(isBioExpanded)}>
                <Paragraph indented={true}>
                    Currently, I am a Product Designer at
                    <a href="https://www.hearst.com/newspapers">Hearst Newspapers</a>. Previously I
                    was with the very talented people at
                    <a href="https://oak.is/">Oak Studios</a>. I hold an MPS in Communication Design
                    from Parsons School of Design and a BFA in Graphic Design from SUNY Purchase
                    College. I also participated in the
                    <a href="http://www.typographysummerschool.org/">Typography Summer School</a>
                    program in London.
                </Paragraph>
                <Paragraph indented={true}>
                    You can usually find me taking photos,
                    <a href="https://www.are.na/nikhil-misra/tracks-for-life">music</a>, or learning
                    something new. These days I spend time learning generative image making, type
                    design, and making music.
                </Paragraph>
                <Paragraph indented={true}>
                    I also spend time thinking about alternative education models and how to make
                    creative careers more accessible to BIPOC youth. If you are interested in
                    talking about that, please reach out.
                </Paragraph>
            </div>
            <button
                class="animated-underline"
                aria-expanded={isBioExpanded}
                on:click={expandBioHandler}
            >
                {isBioExpanded ? '(Hide information...)' : '(...More Information)'}
            </button>
        </div>
        <div class="expanded-bio" style={expandedBioStyle(isBioExpanded)}>
            <p>
                Typeset in Gerstner Programm by
                <a href="https://forgotten-shapes.com/">Forgotten Shapes</a>.
            </p>
            <p>
                Designed and developed by me along with
                <a href="https://github.com/OleSkaar">Ole Skaar</a>.
            </p>
            <p>Last Updated: January 12th, 2021</p>
        </div>
        <div>
            <p class="birthday">(B.1991), raised, and living in New York.</p>
            <p class="socials-text">Catch me elsewhere:</p>
            <p>
                <a href="/">Email</a>,
                <a href="/">Instagram</a>,
                <a href="/">Are.na</a>,
                <a href="/">LinkedIn</a>
            </p>
        </div>
    </header>

    <main>
        <Work
            projects={[
                {
                    link: 'goods',
                    title: 'Goods',
                    keywords: 'Design System, Reader Experience',
                    year: '2019 - Present',
                    asset: {
                        type: 'Image',
                        src: '/img/goods/goodsmockup.png',
                        alt: 'Goods homepage',
                    },
                },
                {
                    link: 'unfold',
                    title: 'Unfold',
                    keywords: 'Identity, Design System',
                    year: '2017',
                    asset: {
                        type: 'Video',
                        src: '/img/unfold/unfoldwebsite.mp4',
                    },
                },
                {
                    link: 'inydsr',
                    title: 'Is The New York Dream Still Real?',
                    keywords: 'Data Visualization, Installation, AR',
                    year: '2017',
                    asset: {
                        type: 'Image',
                        src: '/img/itnydsr/showcase.jpg',
                        alt: 'INYDSR showcase',
                    },
                },
                {
                    link: 'misc',
                    title: 'Misc.',
                    keywords: 'Posters, Typefaces In Progress',
                    year: '2016 - ???',
                    asset: {
                        type: 'Image',
                        src: '/img/posters/lordraja_forwebsite.png',
                        alt: 'Lord Raja poster.',
                    },
                },
            ]}
        />
    </main>
</div>

<style>
    :global(.grid) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 100px;
    }

    header {
        --expand-transition: 0.25s cubic-bezier(0.36, 0, 0.66, -0.56);
    }

    header p {
        margin: 0 0 var(--margin-space) 0;
    }

    header button {
        margin-top: 25px;
        cursor: pointer;
    }

    @media only screen and (min-width: 960px) {
        :global(.grid > *:last-child) {
            text-align: right;
        }
    }

    @media only screen and (min-width: 0px) and (max-width: 960px) {
        :global(.grid) {
            gap: 0;
        }

        header button {
            margin-bottom: 25px;
        }

        header.grid {
            grid-template-columns: 1fr;
        }

        .birthday {
            display: none;
        }

        .socials-text {
            margin-bottom: 0;
        }
    }

    .bodyWrapper {
        padding: 25px;
    }

    .expanded-bio {
        overflow: hidden;
        transition: max-height var(--expand-transition), opacity var(--expand-transition);
    }
</style>
