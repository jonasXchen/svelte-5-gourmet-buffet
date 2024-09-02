<script>
  import BuffetImage from "/src/assets/images/buffet.png";
  import CustomWhiteImage from "/src/assets/images/custom-white-bg.jpg";
  import DessertImage from "/src/assets/images/dessert.png";
</script>

<div class="bg-white flex flex-col lg:px-8 md:px-20 sm:px-16 p-8 w-full gap-8">
  <div class="flex h-4/5 items-center w-full lg:flex-row flex-col gap-8">
    <!-- Buffet -->
    <div class="flex flex-col lg:w-1/2 lg:relative items-center w-full">
      <img
        src={BuffetImage}
        alt="Buffet Image"
        class="lg:z-30 lg:absolute lg:-right-20 lg:transform lg:-translate-y-1/2 object-cover min-h-60 w-full lg:w-fit h-[380px] md:max-h-[400px] max-h-[240px] sm:max-h-[320px]"
      />
    </div>
    <div
      class="flex lg:w-1/2 flex-col lg:gap-2 lg:h-[500px] justify-center max-h-[500px] relative sm:p-12 p-8 w-full"
      style="background-image: url('{CustomWhiteImage}');"
    >
      <div class="flex flex-col lg:z-20 lg:p-16 lg:left-10 lg:absolute gap-4">
        <div
          class="font-cinzel text-primary text-3xl font-medium tracking-widest"
        >
          Speisen
        </div>
        <p class="text-xl font-semibold">Jeder Geschmack is dabei!</p>
        <p class="text-balance">
          Nutzen Sie die Gelegenheit und genießen Sie unser zahlreiches
          Speisenangebot!
        </p>
        <a
          href="/src/assets/menu/A3-Gkarte-2024-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="bg-white p-2 border-2 border-primary text-primary font-semibold w-full max-w-64"
            >Zur Speisekarte
          </button>
        </a>
      </div>
    </div>
  </div>

  <!-- Desserts -->
  <div class="flex h-4/5 items-center w-full lg:flex-row flex-col gap-8">
    <div
      class="flex flex-col lg:w-1/2 lg:relative items-center lg:order-2 w-full"
    >
      <img
        src={DessertImage}
        alt="Buffet Image"
        class="lg:z-30 lg:absolute lg:-left-20 lg:transform lg:-translate-y-1/2 object-cover min-h-60 w-full lg:w-fit h-[380px] md:max-h-[400px] max-h-[240px] sm:max-h-[320px]"
      />
    </div>
    <div
      class="flex lg:w-1/2 flex-col lg:gap-2 lg:h-[500px] lg:max-h-[500px] justify-center relative sm:p-12 p-8 w-full"
      style="background-image: url('{CustomWhiteImage}');"
    >
      <div class="flex flex-col lg:z-20 lg:p-16 lg:right-10 lg:absolute gap-4">
        <div
          class="font-cinzel text-primary text-3xl font-medium tracking-widest"
        >
          Nachspeise
        </div>
        <p class="text-xl font-semibold">Süß und lecker!</p>
        <p class="text-balance">
          Von Eis über Obst zu gebackene Köstlichkeiten, wählen Sie Ihre
          Wunschnachspeise aus!
        </p>
        <a
          href="/src/assets/menu/A3-Gkarte-2024-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="bg-white p-2 border-2 border-primary text-primary font-semibold w-full max-w-64"
            >Zur Speisekarte</button
          >
        </a>
      </div>
    </div>
  </div>
</div>
