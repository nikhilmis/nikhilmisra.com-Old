<script>
    import INYDSR from '$lib/assets/img/itnydsr/ITNYDSR.jpg';
    import HeroImage from '$lib/components/HeroImage.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Image from '$lib/components/Image.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import ProjectContainer from '$lib/components/ProjectContainer.svelte';
    import ProjectInfo from '$lib/components/ProjectInfo.svelte';
    import showcase from '$lib/assets/img/itnydsr/showcase.jpg';
    import graph from '$lib/assets/img/itnydsr/graph.gif';
    import drawing from '$lib/assets/img/itnydsr/drawing.jpg';
    import drawing3 from '$lib/assets/img/itnydsr/drawing3.jpg';
    import demovreveal1 from '$lib/assets/img/itnydsr/demoreveal1.jpg';
    import demovreveal2 from '$lib/assets/img/itnydsr/demoreveal2.jpg';
    import discussion from '$lib/assets/img/itnydsr/discussion.jpg';
    import discussion2 from '$lib/assets/img/itnydsr/discussion2.jpg';
    import iphonear from '$lib/assets/img/itnydsr/iphonear.png';
    import arreveal from '$lib/assets/img/itnydsr/arreveal.jpg';
</script>

<HeroImage src={INYDSR} alt="INYDSR logo" />
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
    <Image src={showcase} alt={'Showcase'} />
    <Image
        src={graph}
        alt={'Graph showing the annual decrease of refugees in NYC from 2002 to 2016.'}
    />
    <Paragraph
        >The line graph before participants filled it out and with the data from the US State
        Department.
    </Paragraph>
    <Carousel
        uniqueTitle={'demo'}
        images={[
            { src: drawing, alt: 'Drawing' },
            { src: demovreveal1, alt: 'Demo reveal' },
            { src: drawing3, alt: 'Drawing' },
            { src: demovreveal2, alt: 'Demo reveal' },
            { src: discussion, alt: 'Discussion' },
            { src: discussion2, alt: 'Discussion' },
        ]}
    />
    <Paragraph>
        Participants filling in the graph with their guesses and seeing the reveal. People spent
        time discussing the results after.
    </Paragraph>
    <Image src={iphonear} alt={'iPhone AR'} />
    <Image src={arreveal} alt={'AR Reveal'} />
</ProjectContainer>
