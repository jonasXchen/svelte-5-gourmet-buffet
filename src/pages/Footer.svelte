<script>
  import {
    PUBLIC_RESTAURANT_NAME,
    PUBLIC_RESTAURANT_STREET,
    PUBLIC_RESTAURANT_CITY,
    PUBLIC_RESTAURANT_TEL,
    PUBLIC_RESTAURANT_FAX,
    PUBLIC_RESTAURANT_OWNER,
  } from "$lib/constants";

  import CustomWhiteImage from "/src/assets/images/custom-white-bg.jpg";
  import FacebookIcon from "/src/assets/icons/facebook.png";
</script>

<div
  class="flex flex-col items-center w-full gap-8 py-24 mt-20"
  style="background-image: url('{CustomWhiteImage}');"
>
  <!-- Icon -->
  <div class="flex h-8">
    <a
      href="https://www.facebook.com/gourmetbuffet.hallstadt/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={FacebookIcon} alt="Facebook" class="object-cover h-8" />
    </a>
  </div>
  <div class="flex flex-col items-center">
    <!-- Restaurant Name and Address -->
    <div class="font-semibold text-primary">{PUBLIC_RESTAURANT_NAME}</div>
    <div>{PUBLIC_RESTAURANT_STREET}</div>
    <div>{PUBLIC_RESTAURANT_CITY}</div>

    <!-- Restaurant Tel -->
    {#if PUBLIC_RESTAURANT_TEL}
      <div>Tel: {PUBLIC_RESTAURANT_TEL}</div>
    {/if}

    <!-- Restaurant Fax -->
    {#if PUBLIC_RESTAURANT_FAX}
      <div>Fax: {PUBLIC_RESTAURANT_FAX}</div>
    {/if}

    <!-- Restaurant Owner -->
    {#if PUBLIC_RESTAURANT_OWNER}
      <div>Inhaber: {PUBLIC_RESTAURANT_OWNER}</div>
    {/if}
  </div>
  <div class="flex flex-row gap-3 underline">
    <a href="/impressum" target="_blank" rel="noopener noreferrer">
      Impressum
    </a>
    <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
      Datenschutz
    </a>
  </div>
</div>
