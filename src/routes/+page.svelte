<script>
  import Header from "../pages/Header.svelte";
  import Food from "../pages/Food.svelte";
  import Facilities from "../pages/Facilities.svelte";
  import Directions from "../pages/Directions.svelte";
  import Footer from "../pages/Footer.svelte";
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  <meta
    name="Asiatisches Restaurant - Gourmet Buffet"
    content="Mongolischer Grill & Sushi. All you can eat & drink."
  />
  <meta name="keywords" content="Gourmet Buffet, Bamberg, Grill, Sushi" />
  <link rel="icon" href="/logo.png" />
  <title>Asiatisches Restaurant - Gourmet Buffet</title>
</svelte:head>

<div class="flex flex-col items-center">
  <Header />
  <div class="flex flex-col max-w-[1080px]">
    <Food />
    <Facilities />
    <Directions />
  </div>
  <Footer />
</div>
