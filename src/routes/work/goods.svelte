<script>
    import field from '$lib/assets/img/goods/field.png';
    import goodsfull from '$lib/assets/img/goods/goodsfull.png';
    import goodslogo from '$lib/assets/img/goods/goodslogo.svg';
    import me from '$lib/assets/img/goods/me.png';
    import postits from '$lib/assets/img/goods/postits.png';
    import midfi from '$lib/assets/img/goods/midfi.png';
    import sketchesgoods from '$lib/assets/img/goods/sketchesgoods.jpg';
    import lofi from '$lib/assets/img/goods/lofi.png';
    import sellingflow from '$lib/assets/img/goods/sellingflow.png';
    import homepage from '$lib/assets/img/goods/homepage.png';
    import goodsnav from '$lib/assets/img/goods/goodsnav.png';
    import checkout from '$lib/assets/img/goods/checkout.png';
    import Carousel from '$lib/components/Carousel.svelte';
    import HeroImage from '$lib/components/HeroImage.svelte';
    import Image from '$lib/components/Image.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import ProjectContainer from '$lib/components/ProjectContainer.svelte';
    import ProjectInfo from '$lib/components/ProjectInfo.svelte';
</script>

<HeroImage src={goodslogo} alt="Goods logo" />
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
    <Image src={goodsfull} alt={'Screenshot of the Goods. website'} />
    <Carousel
        uniqueTitle={'process'}
        images={[
            { src: me, alt: 'Me' },
            { src: postits, alt: 'Postits' },
            { src: field, alt: 'In the field.' },
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
            { src: midfi, alt: 'Midfi' },
            { src: sketchesgoods, alt: 'Sketches Goods' },
            { src: lofi, alt: 'Lo-fi' },
        ]}
    />
    <Paragraph>
        Prototyping
        <br />
        <br />
        After conducting research, I went through a couple rounds of wireframing and prototyping. Throughout
        each step of the process, changes were constantly made to the product.
    </Paragraph>
    <Image src={homepage} alt={'Goods homepage'} />
    <Image src={sellingflow} alt={'Goods selling flow'} />
    <Paragraph
        >The selling feature was designed to be simple to use. Any type of user can sell on Goods.,
        from a streetwear reselling veteran to someone selling something for the very first time.
    </Paragraph>
    <Image src={goodsnav} alt={'Goods navigation'} />
    <Image src={checkout} alt={'Goods checkout'} />
    <Paragraph
        >The highlight feature of Goods. is the ability to donate a portion of the purchase to one
        of our organization partners. The user can read more information on our current partners and
        are able to select where there donation goes to upon checkout.
    </Paragraph>
</ProjectContainer>
