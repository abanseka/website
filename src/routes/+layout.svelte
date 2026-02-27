<script lang="ts">
  import "../app.css";
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

<slot />
