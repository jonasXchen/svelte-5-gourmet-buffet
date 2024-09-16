<script>
  import {
    PUBLIC_ENTITY_NAME,
    PUBLIC_ENTITY_STREET,
    PUBLIC_ENTITY_CITY,
    PUBLIC_ENTITY_OPENING_DAYS,
    PUBLIC_ENTITY_CLOSING_DAYS,
    PUBLIC_ENTITY_LUNCH_TIME,
    PUBLIC_ENTITY_DINNER_TIME,
    PUBLIC_ENTITY_TEL,
    PUBLIC_ENTITY_FAX,
  } from "$lib/constants";

  import IndoorImage from "/src/assets/images/indoor.png";
  import OutdoorImage from "/src/assets/images/outdoor.png";
  import ImageCarousel from "../components/ImageCarousel.svelte";

  let images = [
    {
      file: IndoorImage,
      name: "Restaurant Indoor",
    },
    {
      file: OutdoorImage,
      name: "Restaurant Outdoor",
    },
  ];
</script>

<div class="flex flex-col w-full gap-8 pb-6 bg-white">
  <!-- Image Carousell -->
  <div class="relative flex w-full">
    <ImageCarousel carouselClass="h-full w-full max-h-[680px]" {images} />
    <div
      class="absolute -bottom-1 left-0 bg-white [clip-path:polygon(0%_0%,100%_90%,100%_100%,0%_100%)] w-full h-1/5 opacity-35"
    ></div>
    <div
      class="absolute -bottom-1 left-0 bg-white [clip-path:polygon(0%_0%,100%_90%,100%_100%,0%_100%)] w-full h-1/6 opacity-100"
    ></div>
  </div>

  <!-- Restaurant Name -->
  <div
    class="flex items-center justify-center w-full text-3xl font-semibold text-balance text-blue text-primary font-cinzel"
  >
    <span class="tracking-widest">{PUBLIC_ENTITY_NAME}</span>
  </div>

  <!-- Address & Opening Hours -->
  <div class="flex flex-col items-center justify-center w-full gap-4">
    <!-- Restarant Street & City -->
    <div class="flex flex-col items-center">
      <p>
        {PUBLIC_ENTITY_STREET}
      </p>
      <p>
        {PUBLIC_ENTITY_CITY}
      </p>
    </div>

    <div class="flex flex-col items-center">
      <!-- Restaurant Tel -->
      {#if PUBLIC_ENTITY_TEL}
        <a href="tel:{PUBLIC_ENTITY_TEL}">Tel: {PUBLIC_ENTITY_TEL}</a>
      {/if}
      <!-- Restaurant Fax -->
      {#if PUBLIC_ENTITY_FAX}
        <p>Fax: {PUBLIC_ENTITY_FAX}</p>
      {/if}
    </div>
  </div>
  <div class="flex flex-col items-center justify-center w-full gap-0">
    <!-- Opening Days -->
    <p class="font-semibold">{PUBLIC_ENTITY_OPENING_DAYS}</p>
    <!-- Lunch Time -->
    {#if PUBLIC_ENTITY_LUNCH_TIME}
      <p>{PUBLIC_ENTITY_LUNCH_TIME}</p>
    {/if}
    <!-- Dinner Time -->
    {#if PUBLIC_ENTITY_DINNER_TIME}
      <p>{PUBLIC_ENTITY_DINNER_TIME}</p>
    {/if}
    <!-- Opening during holidays -->
    <p>auch an Feiertagen geöffnet</p>
    <!-- Closing Days -->
    {#if PUBLIC_ENTITY_CLOSING_DAYS}
      <p class="font-semibold">{PUBLIC_ENTITY_CLOSING_DAYS}</p>
    {/if}
  </div>
</div>
