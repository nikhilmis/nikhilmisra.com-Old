<script>
    import HeroImage from '$lib/components/HeroImage.svelte';
    import Image from '$lib/components/Image.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import ProjectContainer from '$lib/components/ProjectContainer.svelte';
    import ProjectInfo from '$lib/components/ProjectInfo.svelte';
    import lordraja from '$lib/assets/img/posters/lordraja.png';
    import kalmarks from '$lib/assets/img/posters/kalmarks.png';
    import photay from '$lib/assets/img/posters/photay.png';
    import deadtenants2 from '$lib/assets/img/posters/deadtenants2.png';
    import laurelhalo from '$lib/assets/img/posters/laurelhalo.png';
    import deadtenants from '$lib/assets/img/posters/deadtenants.png';
</script>

<HeroImage />
<ProjectContainer>
    <ProjectInfo title={'Posters'}>
        <Paragraph>
            An ongoing collection of posters that I have done for various events and tours. All work
            features original photography.
        </Paragraph>
    </ProjectInfo>
    <Image src={lordraja} alt={'Lord Raja'} />
    <Image src={kalmarks} alt={'Kal Marks'} />
    <Image src={photay} alt={'Photay'} />
    <Image src={deadtenants2} alt={'Dead Tenants'} />
    <Image src={laurelhalo} alt={'Laurel Halo'} />
    <Image src={deadtenants} alt={'Dead Tenants'} />
</ProjectContainer>
