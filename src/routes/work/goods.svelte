<script>
    import Carousel from '$lib/components/Carousel.svelte';
    import HeroImage from '$lib/components/HeroImage.svelte';
    import Image from 'svimg';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import ProjectContainer from '$lib/components/ProjectContainer.svelte';
    import ProjectInfo from '$lib/components/ProjectInfo.svelte';
</script>

<HeroImage src='/img/goods/goodslogo.svg' alt="Goods logo" />
<ProjectContainer>
    <ProjectInfo
        title={'Goods'}
        subheading={'Identity, Product Design'}
        duration={'15 Week Project'}
    >
        <Paragraph>
            Goods. is new way to fund non-profit organizations. Goods. is a non-profit marketplace
            where people can buy and sell clothing items. With each item you buy, Goods. takes 10%
            percent of the purchase and donate it to a non-profit partner. Goods. partners with
            different organizations every 2-3 months to maximize social impact.
        </Paragraph>
    </ProjectInfo>
    <Image src='/img/goods/goodsfull.png' alt={'Screenshot of the Goods. website'} />
    <Carousel
        uniqueTitle={'process'}
        images={[
            { src: '/img/goods/me.png', alt: 'Me' },
            { src: '/img/goods/postits.png', alt: 'Postits' },
            { src: '/img/goods/field.png', alt: 'In the field.' },
        ]}
    />
    <Paragraph>
        Research
        <br />
        <br />
        The project started out with two ideas of reselling clothing and creating a service for social
        impact. I wanted to see if I could merge these two worlds together. I started my research by
        talking to various people who have sold clothing on the internet. I also did field observations
        by going to various reselling clothing stores and fashion events in New York City.
    </Paragraph>
    <Carousel
        uniqueTitle={'screenshots'}
        images={[
            { src: '/img/goods/midfi.png', alt: 'Midfi' },
            { src: '/img/goods/sketchesgoods.jpg', alt: 'Sketches Goods' },
            { src: '/img/goods/lofi.png', alt: 'Lo-fi' },
        ]}
    />
    <Paragraph>
        Prototyping
        <br />
        <br />
        After conducting research, I went through a couple rounds of wireframing and prototyping. Throughout
        each step of the process, changes were constantly made to the product.
    </Paragraph>
    <Image src='/img/goods/homepage.png' alt={'Goods homepage'} />
    <Image src='/img/goods/sellingflow.png' alt={'Goods selling flow'} />
    <Paragraph
        >The selling feature was designed to be simple to use. Any type of user can sell on Goods.,
        from a streetwear reselling veteran to someone selling something for the very first time.
    </Paragraph>
    <Image src='/img/goods/goodsnav.png' alt={'Goods navigation'} />
    <Image src='/img/goods/checkout.png' alt={'Goods checkout'} />
    <Paragraph
        >The highlight feature of Goods. is the ability to donate a portion of the purchase to one
        of our organization partners. The user can read more information on our current partners and
        are able to select where there donation goes to upon checkout.
    </Paragraph>
</ProjectContainer>
