<script>
  // Injecting TailwindCss
  import "../app.css";

  // Injecting Vercel Analytics
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  inject({ mode: dev ? "development" : "production" });
</script>

<main class="font-overpass font-light md:text-lg text-base"><slot /></main>
