<script lang="ts">
  import { onMount } from "svelte";
  import { Sun, Moon } from "@lucide/svelte";

  let isDark = $state(false);

  onMount(() => {
    const saved = localStorage.getItem("theme");
    isDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  $effect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });

  function toggle() {
    isDark = !isDark;
  }
</script>

<button class="theme-toggle" onclick={toggle} aria-label="Toggle theme">
  {#if isDark}
    <Sun size={24} />
  {:else}
    <Moon size={24} />
  {/if}
</button>

<style>
  .theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    color: var(--black);
    display: grid;
    place-items: center;
    transition:
      background-color 0.2s,
      color 0.2s;
    z-index: 1001;
  }

  .theme-toggle:hover {
    background-color: var(--offwhite);
  }

  @media (max-width: 768px) {
    .theme-toggle {
      top: 10px;
      right: 10px;
    }
  }
</style>
