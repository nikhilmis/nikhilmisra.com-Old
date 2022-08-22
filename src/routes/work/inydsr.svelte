<script>
    import HeroImage from '$lib/components/HeroImage.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Image from 'svimg';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import ProjectContainer from '$lib/components/ProjectContainer.svelte';
    import ProjectInfo from '$lib/components/ProjectInfo.svelte';
</script>

<HeroImage src='/img/itnydsr/ITNYDSR.jpg' alt="INYDSR logo" />
<ProjectContainer>
    <ProjectInfo
        title={'Is The New York Dream Still Real?'}
        subheading={'Data Visualization, Installation, AR'}
        duration={'4 Week Project, 2017'}
    >
        <Paragraph>
            Is the idea of New York City as a sanctuary city still true for refugees? I wanted to
            ask people if they thought this was still true today by creating a guessing game for
            people to complete a line graph. Information and data provided by the US State
            Department’s Refugee Processing Center which is revealed by AR. This project was
            conducted at the Parsons School Of Design as part of a Data Visualization exhibition.
        </Paragraph>
    </ProjectInfo>
    <Image src='/img/itnydsr/showcase.jpg' alt={'Showcase'} />
    <Image
        src='/img/itnydsr/graph.gif'
        alt={'Graph showing the annual decrease of refugees in NYC from 2002 to 2016.'}
    />
    <Paragraph
        >The line graph before participants filled it out and with the data from the US State
        Department.
    </Paragraph>
    <Carousel
        uniqueTitle={'demo'}
        images={[
            { src: '/img/itnydsr/drawing.jpg', alt: 'Drawing' },
            { src: '/img/itnydsr/demoreveal1.jpg', alt: 'Demo reveal' },
            { src: '/img/itnydsr/drawing3.jpg', alt: 'Drawing' },
            { src: '/img/itnydsr/demoreveal2.jpg', alt: 'Demo reveal' },
            { src: '/img/itnydsr/discussion.jpg', alt: 'Discussion' },
            { src: '/img/itnydsr/discussion2.jpg', alt: 'Discussion' },
        ]}
    />
    <Paragraph>
        Participants filling in the graph with their guesses and seeing the reveal. People spent
        time discussing the results after.
    </Paragraph>
    <Image src='/img/itnydsr/iphonear.png' alt={'iPhone AR'} />
    <Image src='/img/itnydsr/arreveal.jpg' alt={'AR Reveal'} />
</ProjectContainer>
