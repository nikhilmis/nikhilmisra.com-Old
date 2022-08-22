<script>
    import HeroImage from '$lib/components/HeroImage.svelte';
    import Image from 'svimg';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import ProjectContainer from '$lib/components/ProjectContainer.svelte';
    import ProjectInfo from '$lib/components/ProjectInfo.svelte';
</script>

<HeroImage />
<ProjectContainer>
    <ProjectInfo title={'Posters'}>
        <Paragraph>
            An ongoing collection of posters that I have done for various events and tours. All work
            features original photography.
        </Paragraph>
    </ProjectInfo>
    <Image src='/img/posters/lordraja.png' alt={'Lord Raja'} />
    <Image src='/img/posters/kalmarks.png' alt={'Kal Marks'} />
    <Image src='/img/posters/photay.png' alt={'Photay'} />
    <Image src='/img/posters/deadtenants2.png' alt={'Dead Tenants'} />
    <Image src='/img/posters/laurelhalo.png' alt={'Laurel Halo'} />
    <Image src='/img/posters/deadtenants.png' alt={'Dead Tenants'} />
</ProjectContainer>
