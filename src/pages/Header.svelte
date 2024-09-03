<script>
  import {
    PUBLIC_RESTAURANT_NAME,
    PUBLIC_RESTAURANT_STREET,
    PUBLIC_RESTAURANT_CITY,
    PUBLIC_RESTAURANT_OPENING_DAYS,
    PUBLIC_RESTAURANT_CLOSING_DAYS,
    PUBLIC_RESTAURANT_LUNCH_TIME,
    PUBLIC_RESTAURANT_DINNER_TIME,
    PUBLIC_RESTAURANT_TEL,
    PUBLIC_RESTAURANT_FAX,
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

<div class="bg-white flex flex-col w-full gap-8 pb-6">
  <!-- Image Carousell -->
  <div class="relative flex w-full">
    <ImageCarousel carouselClass="h-full w-full" {images} />
    <div
      class="absolute -bottom-1 left-0 bg-white [clip-path:polygon(0%_0%,100%_90%,100%_100%,0%_100%)] w-full h-1/5 opacity-35"
    ></div>
    <div
      class="absolute -bottom-1 left-0 bg-white [clip-path:polygon(0%_0%,100%_90%,100%_100%,0%_100%)] w-full h-1/6 opacity-100"
    ></div>
  </div>

  <!-- Restaurant Name -->
  <div
    class="text-balance flex w-full font-semibold text-3xl text-blue justify-center text-primary items-center font-cinzel"
  >
    <span class="tracking-widest">{PUBLIC_RESTAURANT_NAME}</span>
  </div>

  <!-- Address & Opening Hours -->
  <div class="flex flex-col w-full justify-center items-center gap-4">
    <!-- Restarant Street & City -->
    <div class="flex flex-col items-center">
      <p>
        {PUBLIC_RESTAURANT_STREET}
      </p>
      <p>
        {PUBLIC_RESTAURANT_CITY}
      </p>
    </div>

    <div class="flex flex-col items-center">
      <!-- Restaurant Tel -->
      {#if PUBLIC_RESTAURANT_TEL}
        <p>Tel: {PUBLIC_RESTAURANT_TEL}</p>
      {/if}
      <!-- Restaurant Fax -->
      {#if PUBLIC_RESTAURANT_FAX}
        <p>Fax: {PUBLIC_RESTAURANT_FAX}</p>
      {/if}
    </div>
  </div>
  <div class="flex flex-col w-full justify-center items-center gap-0">
    <!-- Opening Days -->
    <p class="font-semibold">{PUBLIC_RESTAURANT_OPENING_DAYS}</p>
    <!-- Lunch Time -->
    {#if PUBLIC_RESTAURANT_LUNCH_TIME}
      <p>{PUBLIC_RESTAURANT_LUNCH_TIME}</p>
    {/if}
    <!-- Dinner Time -->
    {#if PUBLIC_RESTAURANT_DINNER_TIME}
      <p>{PUBLIC_RESTAURANT_DINNER_TIME}</p>
    {/if}
    <!-- Opening during holidays -->
    <p>auch an Feiertagen geöffnet</p>
    <!-- Closing Days -->
    {#if PUBLIC_RESTAURANT_CLOSING_DAYS}
      <p class="font-semibold">{PUBLIC_RESTAURANT_CLOSING_DAYS}</p>
    {/if}
  </div>
</div>
