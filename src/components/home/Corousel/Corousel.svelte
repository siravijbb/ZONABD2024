<script>
    import { Carousel, Thumbnails, Button, Indicator } from 'flowbite-svelte';
    let index = 0;
    const images = [
        {
            title: "Let's come and celebrate your owl-next-door's birthday🦉🪶✨",
            alt: "Let's come and celebrate your owl-next-door's birthday🦉🪶✨",
            src: "/images/imgHoku/HOKUMRTSAMYAN.webp",
            imgClass: 'object-contain h-full w-fit rounded-sm',
            link: 'https://twitter.com/HokuPLG/status/1743212304219652251'
        },
        {
            title: "Let's come and celebrate your owl-next-door's birthday🦉🪶✨ 2",
            alt: "Let's come and celebrate your owl-next-door's birthday🦉🪶✨ 2",
            src: "/images/imgHoku/HOKUMRTSAMYAN.webp",
            imgClass: 'object-contain h-full w-fit rounded-sm',
            link: 'https://twitter.com/HokuPLG/status/1743212304219652251'
        },
    ];
    /**
     * @type {{ alt: any; }}
     */
    let image;
</script>

<div class="max-w-4xl space-y-4">
    <div class="max-w-4xl space-y-4 bg-gray-500 rounded mx-4 py-4">
        <Carousel
                {images}
                imgClass="object-contain h-full w-fit rounded-sm"
                duration={7500}
                let:Indicators
                let:Controls
                on:change={({ detail }) => (image = detail)}
        >
            <a slot="slide" href={images[index]?.link} target="_blank" let:Slide let:index>
                <Slide image={images[index]} class="object-contain h-full w-fit rounded-sm" />
            </a>
            <Controls />
            <Indicators />
        </Carousel>
    </div>
    <div
            class=" h-10 mx-3 bg-gradient-to-b from-[#c7722e] to-[#f4a443] dark:text-white p-2 my-2 text-center rounded-lg "
    >
        {image?.alt}
    </div>
</div>
