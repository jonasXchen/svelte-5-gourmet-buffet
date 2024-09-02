<script>
  export let color = "bg-gray-300";
  export let height = "h-16";
  export let clipPath =
    "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_50%_70%,_0_100%)]";
  export let position = "bottom-0";
</script>

<div class="absolute {height} {color} {clipPath} {position}"></div>
