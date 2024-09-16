<script>
  import {
    PUBLIC_ENTITY_NAME,
    PUBLIC_ENTITY_STREET,
    PUBLIC_ENTITY_CITY,
    PUBLIC_ENTITY_TEL,
    PUBLIC_ENTITY_FAX,
    PUBLIC_ENTITY_OWNER,
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
    <div class="font-semibold text-primary">{PUBLIC_ENTITY_NAME}</div>

    <div class="flex flex-col items-center text-sm font-thin">
      <div>{PUBLIC_ENTITY_STREET}</div>
      <div>{PUBLIC_ENTITY_CITY}</div>

      <!-- Restaurant Tel -->
      {#if PUBLIC_ENTITY_TEL}
        <a href="tel:{PUBLIC_ENTITY_TEL}">Tel: {PUBLIC_ENTITY_TEL}</a>
      {/if}

      <!-- Restaurant Fax -->
      {#if PUBLIC_ENTITY_FAX}
        <div>Fax: {PUBLIC_ENTITY_FAX}</div>
      {/if}

      <!-- Restaurant Owner -->
      {#if PUBLIC_ENTITY_OWNER}
        <div>Inhaber: {PUBLIC_ENTITY_OWNER}</div>
      {/if}
    </div>
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
