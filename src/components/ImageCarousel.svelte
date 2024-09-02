<script lang="ts">
  import { onMount } from "svelte";
  import CustomWhiteImage from "/src/assets/images/custom-white-bg.jpg";

  interface Image {
    file: string;
    name: string;
  }

  let {
    images = [
      {
        file: "https://via.placeholder.com/600x400/FF5733/ffffff?text=Image+1",
        name: "Image 1",
      },
      {
        file: "https://via.placeholder.com/600x400/33FF57/ffffff?text=Image+2",
        name: "Image 2",
      },
      {
        file: "https://via.placeholder.com/600x400/3357FF/ffffff?text=Image+3",
        name: "Image 2",
      },
    ] as Image[],
    autoRotate = 4000,
    carouselClass = "h-full w-full gap-0",
    imageClass = "object-cover",
    imageTitle = false as Boolean,
  } = $props();

  let interval: number;

  let carouselContainer: HTMLDivElement | undefined = $state(undefined);

  // Function to scroll the carousel left
  const scrollLeft = () => {
    let currentLeftScroll = 0;
    if (carouselContainer) {
      // Check if we're at the first image and wrap to the end
      if (carouselContainer.scrollLeft === 0) {
        carouselContainer.scrollTo({
          left: carouselContainer.scrollWidth - carouselContainer.clientWidth, // Scroll to the last image
          behavior: "smooth",
        });
        currentLeftScroll =
          carouselContainer.scrollWidth - carouselContainer.clientWidth;
      } else {
        carouselContainer.scrollBy({
          left: -carouselContainer.clientWidth, // Scroll by the width of the container
          behavior: "smooth", // Smooth scrolling
        });
        currentLeftScroll =
          carouselContainer.scrollLeft - carouselContainer.clientWidth;
      }
      updateCurrentIndex();
      resetTimer();
    }
  };

  // Function to scroll the carousel right
  const scrollRight = () => {
    let currentLeftScroll = 0;
    if (carouselContainer) {
      const maxScrollLeft =
        carouselContainer.scrollWidth - carouselContainer.clientWidth;

      // Check if we're at the last image and wrap to the beginning
      if (carouselContainer.scrollLeft >= maxScrollLeft - images.length - 2) {
        carouselContainer.scrollTo({
          left: 0, // Scroll to the first image
          behavior: "smooth",
        });
        currentLeftScroll = 0;
      } else {
        carouselContainer.scrollBy({
          left: carouselContainer.clientWidth, // Scroll by the width of the container
          behavior: "smooth", // Smooth scrolling
        });
        currentLeftScroll =
          carouselContainer.scrollLeft + carouselContainer.clientWidth;
      }
      updateCurrentIndex();
      resetTimer();
    }
  };

  let currentIndex = $state(0);
  // Function to scroll to a specific index
  const scrollToIndex = (index: number) => {
    if (carouselContainer) {
      const scrollPosition = index * carouselContainer.clientWidth;
      carouselContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      currentIndex = index;
      updateCurrentIndex();
      resetTimer();
    }
  };

  // Function to update the current index based on scroll position
  const updateCurrentIndex = () => {
    if (carouselContainer) {
      const newIndex = Math.round(
        carouselContainer.scrollLeft / carouselContainer.clientWidth
      );
      currentIndex = newIndex % images.length; // Ensure index wraps around
    }
  };
  // Function to start the interval
  const startTimer = () => {
    interval = setInterval(scrollRight, autoRotate); // For rotating image
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(interval);
    startTimer();
  };

  // Start the automatic carousel
  onMount(() => {
    if (carouselContainer) {
      carouselContainer.addEventListener("scroll", updateCurrentIndex);
    }
    startTimer(); // Start the interval on mount
    return () => {
      clearInterval(interval); // Clear interval on component destroy
    };
  });
</script>

<div class="relative w-full overflow-hidden">
  <div
    bind:this={carouselContainer}
    class="flex overflow-hidden overflow-x-auto snap-x snap-mandatory transition-transform duration-500 ease-in-out {carouselClass}"
  >
    <!-- Cover Images -->
    {#each images as image}
      <div class="flex flex-col gap-0 w-full shrink-0 snap-center relative">
        <img
          src={image.file}
          alt={image.name}
          class="object-cover w-full h-full {imageClass}"
        />
        <!-- Title -->
        {#if imageTitle}
          <div
            class="absolute bottom-10 bg-white/90 backdrop-blur-sm -right-1 px-4 py-2 rounded-l-xl"
          >
            <p
              class="opacity-100 text-primary font-cinzel font-medium tracking-wide sm:tracking-wider md:tracking-widest sm:text-xl text-lg"
            >
              {image.name}
            </p>
          </div>
        {/if}
      </div>
    {/each}
    <!-- Pagination Circles -->
    <div
      class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      {#each images as _, index}
        <div
          class="w-3 h-3 rounded-full border border-gray-400 cursor-pointer"
          class:bg-white={currentIndex === index}
          class:bg-black={currentIndex !== index}
          class:opacity-60={currentIndex !== index}
          on:click={() => scrollToIndex(index)}
        ></div>
      {/each}
    </div>
  </div>

  <button
    class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-opacity-10 bg-black p-2 rounded-full shadow-lg focus:outline-none"
    on:click={scrollLeft}
  >
    &#10094;
  </button>
  <button
    class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-opacity-10 bg-black p-2 rounded-full shadow-lg focus:outline-none"
    on:click={scrollRight}
  >
    &#10095;
  </button>
</div>

<style>
  /* Hide scrollbar for Webkit browsers */
  .overflow-x-auto::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Edge */
  }
</style>
