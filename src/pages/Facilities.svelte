<script>
  import ImageCarousel from "../components/ImageCarousel.svelte";

  import EntranceImage from "/src/assets/images/entrance.png";
  import Indoor2Image from "/src/assets/images/indoor2.png";
  import TablesImage from "/src/assets/images/tables.png";
  import OutdoorImage from "/src/assets/images/outdoor.png";

  let images = [
    {
      file: EntranceImage,
      name: "Herzlich Willkommen!",
    },
    {
      file: Indoor2Image,
      name: "Elegant traditionell",
    },
    {
      file: TablesImage,
      name: "Gemeinsam und gemütlich",
    },
    {
      file: OutdoorImage,
      name: "Sommerliche Dachterasse",
    },
  ];
</script>

<div class="flex flex-col lg:px-8 md:px-20 sm:px-16 p-8 gap-8">
  <!-- Title -->
  <div
    class="flex font-cinzel text-primary text-3xl font-medium tracking-widest leading-10"
  >
    Unsere Räumlichkeiten
  </div>
  <!-- Fotos -->
  <div class="flex relative">
    <!-- <div
      class="absolute top-0 left-0 bg-white [clip-path:polygon(0%_0%,100%_0%,100%_60%,0%_30%)] w-full h-1/5 opacity-35 z-20"
    ></div>
    <div
      class="absolute top-0 left-0 bg-white [clip-path:polygon(0%_0%,100%_0%,100%_60%,0%_30%)] w-full h-1/6 opacity-100 z-20"
    ></div> -->
    <ImageCarousel
      carouselClass="sm:h-[340px] lg:h-[640px] md:h-[440px] h-[280px] max-h-[620px] rounded-xl gap-0"
      imageClass="object-cover rounded-xl"
      imageTitle={true}
      {images}
    />
    <!-- <div
      class="absolute bottom-0 left-0 bg-white [clip-path:polygon(0%_0%,100%_50%,100%_100%,0%_100%)] w-full h-1/5 opacity-35"
    ></div>
    <div
      class="absolute bottom-0 left-0 bg-white [clip-path:polygon(0%_0%,100%_50%,100%_100%,0%_100%)] w-full h-1/6 opacity-100"
    ></div> -->
  </div>
</div>
