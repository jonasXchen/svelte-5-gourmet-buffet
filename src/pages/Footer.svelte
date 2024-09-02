<script>
  import {
    PUBLIC_RESTAURANT_NAME,
    PUBLIC_RESTAURANT_STREET,
    PUBLIC_RESTAURANT_CITY,
    PUBLIC_RESTAURANT_TEL,
    PUBLIC_RESTAURANT_FAX,
    PUBLIC_RESTAURANT_OWNER,
  } from "$env/static/public";

  import CustomWhiteImage from "/src/assets/images/custom-white-bg.jpg";
  import FacebookIcon from "/src/assets/icons/facebook.png";
</script>

<div
  class="flex flex-col items-center mt-20 py-24 gap-8 w-full"
  style="background-image: url('{CustomWhiteImage}');"
>
  <!-- Icon -->
  <div class="flex h-8">
    <a
      href="https://www.facebook.com/gourmetbuffet.hallstadt/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={FacebookIcon} alt="Facebook" class="h-8 object-cover" />
    </a>
  </div>
  <div class="flex flex-col items-center">
    <!-- Restaurant Name and Address -->
    <div class="text-primary font-semibold">{PUBLIC_RESTAURANT_NAME}</div>
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
</div>
