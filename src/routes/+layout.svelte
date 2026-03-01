<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";

  let { children } = $props();

  onMount(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : false;
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  });
</script>

<svg
  viewBox="0 0 400 1000"
  xmlns="http://www.w3.org/2000/svg"
  class="noiseTexture"
>
  <filter id="noiseFilter">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="10"
      numOctaves="10"
      stitchTiles="stitch"
    />
  </filter>

  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
</svg>

{@render children()}
