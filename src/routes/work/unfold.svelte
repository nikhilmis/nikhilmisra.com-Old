<script>
    import unfoldlogo from '$lib/assets/img/unfold/unfoldlogo.svg';
    import typeface from '$lib/assets/img/unfold/typeface.svg';
    import unfoldwebsite1 from '$lib/assets/img/unfold/unfoldwebsite1.png';
    import unfoldwebsite2 from '$lib/assets/img/unfold/unfoldwebsite2.png';
    import unfoldwebsite from '$lib/assets/img/unfold/unfoldwebsite.mp4';
    import websitemobile from '$lib/assets/img/unfold/websitemobile.png';
    import unfoldenvironment from '$lib/assets/img/unfold/unfoldenviroment.jpg';
    import environmental4 from '$lib/assets/img/unfold/enviromental4.png';
    import unfoldarchivessplash from '$lib/assets/img/unfold/unfoldarchivesplash.png';
    import unfoldarchive from '$lib/assets/img/unfold/unfoldarchive.png';
    import Carousel from '$lib/components/Carousel.svelte';
    import HeroImage from '$lib/components/HeroImage.svelte';
    import Image from '$lib/components/Image.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import ProjectContainer from '$lib/components/ProjectContainer.svelte';
    import ProjectInfo from '$lib/components/ProjectInfo.svelte';
</script>

<HeroImage src={unfoldlogo} alt="Unfold logo" backgroundColor="var(--black)" />
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
    <Image src={typeface} alt={'A diverse future for all of us.'} />
    <Paragraph
        >As part of the conference's identity, we designed a typeface based on paper folding.
    </Paragraph>
    <Carousel
        uniqueTitle={'typeface'}
        images={[
            { src: unfoldwebsite1, alt: 'Unfold website' },
            { src: unfoldwebsite2, alt: 'Unfold website in Chinese' },
        ]}
    />
    <Paragraph
        >The website was designed to feature a language switch from English to Mandarin. Mandarin is
        the national language of Singapore and we wanted to appeal to the local population as well.
    </Paragraph>
    <!-- Caption not needed as video has no sound -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="video" id="video-style" controls="" width="100%" height="auto">
        <source src={unfoldwebsite} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <Image src={websitemobile} alt={'Mobile website screenshot'} />
    <Image src={unfoldenvironment} alt={'Mockup of Unfold logo in different environments'} />
    <Image src={environmental4} alt={'Mockup of Unfold logo in different environments'} />
    <Carousel
        uniqueTitle={'screenshots'}
        images={[
            { src: unfoldarchivessplash, alt: 'Unfold splash screen' },
            { src: unfoldarchive, alt: 'Unfold sign-up page' },
        ]}
    />
</ProjectContainer>
