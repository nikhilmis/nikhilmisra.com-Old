<script>
    import Carousel from '$lib/components/Carousel.svelte';
    import HeroImage from '$lib/components/HeroImage.svelte';
    import Image from 'svimg';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import ProjectContainer from '$lib/components/ProjectContainer.svelte';
    import ProjectInfo from '$lib/components/ProjectInfo.svelte';
</script>

<HeroImage src="/img/unfold/unfoldlogo.svg" alt="Unfold logo" backgroundColor="var(--black)" />
<ProjectContainer>
    <ProjectInfo
        title={'Unfold'}
        subheading={'Identity, Enviromental, Type, Web Design '}
        duration={'15 Week Project, 2017'}
    >
        <Paragraph>
            Unfold is a design conference for a new era of designers. The main theme of Unfold is
            increasing diversity in the design landscape on a global scale and the designer's
            ethical role to play in creating diversity. Unfold is being held in The National Design
            Centre in Singapore. Singapore has an inluence of Chinese, Indian, Malaysian, and
            British culture. A beautiful enviroment that promotes growth, aesthetics, and of course
            design. In Collaboration With: Sheila Cheng and Diana Meijia.
        </Paragraph>
    </ProjectInfo>
    <Image src="/img/unfold/typeface.svg" alt={'A diverse future for all of us.'} />
    <Paragraph
        >As part of the conference's identity, we designed a typeface based on paper folding.
    </Paragraph>
    <Carousel
        uniqueTitle={'typeface'}
        images={[
            { src: '/img/unfold/unfoldwebsite1.png', alt: 'Unfold website' },
            { src: '/img/unfold/unfoldwebsite2.png', alt: 'Unfold website in Chinese' },
        ]}
    />
    <Paragraph
        >The website was designed to feature a language switch from English to Mandarin. Mandarin is
        the national language of Singapore and we wanted to appeal to the local population as well.
    </Paragraph>
    <!-- Caption not needed as video has no sound -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="video" id="video-style" controls="" width="100%" height="auto">
        <source src="/video/unfold/unfoldwebsite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <Image src="/img/unfold/websitemobile.png" alt={'Mobile website screenshot'} />
    <Image
        src="/img/unfold/unfoldenviroment.jpg"
        alt={'Mockup of Unfold logo in different environments'}
    />
    <Image
        src="/img/unfold/enviromental4.png"
        alt={'Mockup of Unfold logo in different environments'}
    />
    <Carousel
        uniqueTitle={'screenshots'}
        images={[
            { src: '/img/unfold/unfoldarchivesplash.png', alt: 'Unfold splash screen' },
            { src: '/img/unfold/unfoldarchive.png', alt: 'Unfold sign-up page' },
        ]}
    />
</ProjectContainer>
