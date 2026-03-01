<script lang="ts">
  import Socials from "$lib/components/Socials.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { AtSign } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { animate, stagger } from "motion";

  const fullText = "Stay Hungry, Stay Foolish.";
  let displayedText = $state("");

  const phonetics = ["/ˈa.banˈse.kə/ /sɪlˈvɛs.tər/"];
  let phoneticRefs: HTMLSpanElement[] = [];

  function scramble(index: number) {
    const chars = phoneticRefs[index].querySelectorAll(".char");
    animate(
      chars as unknown as Element[],
      // @ts-ignore
      { opacity: [0, 1], filter: ["blur(10px)", "blur(0px)"] },
      { delay: stagger(0.03), duration: 0.4, easing: "ease-out" },
    );
  }

  onMount(() => {
    function typeWriter() {
      displayedText = "";
      let i = 0;
      function type() {
        if (i < fullText.length) {
          displayedText = fullText.slice(0, i + 1);
          i++;
          setTimeout(type, 50);
        }
      }
      type();
    }

    typeWriter();
    const interval = setInterval(typeWriter, 10000);
    return () => clearInterval(interval);
  });
</script>

<ThemeToggle />

<main class="main">
  <p class="name-phonetic" title="Abanseka Sylvester">
    {#each phonetics as phonetic, i}
      <code bind:this={phoneticRefs[i]} onmouseenter={() => scramble(i)}>
        {#each phonetic.split("") as char}
          <span class="char" style="filter: blur(10px);">{char}</span>
        {/each}
      </code>
    {/each}
  </p>

  <h1 class="title" title="Abanseka Sylvester">
    &#193;b&#224;ns<span class="highlight">&#399;ka</span>
    &nbsp;

    <div class="profile-wrapper">
      <img src="/profile.jpeg" alt="profile" fetchpriority="high" />
    </div>

    &#439;ylvester
    <span class="highlight">&#x031A;</span>
  </h1>

  <p class="summary" title="occupation">
    I'm a frontend developer focused on building clean, reliable, and
    user-friendly web solutions. currently working at

    <a href="https://archisacademy.com" title="Archis Academy">
      <img
        src="/archis.svg"
        alt="archis"
        class="inline-logo"
        fetchpriority="high"
      />
    </a>
    and recently launched

    <a href="https://berikids.org" title="Berikids NGO">berikids.org</a> for an
    NGO supporting orphans in Cameroon.
    <br />
  </p>

  <p class="email-cta-wrapper">
    you can always reach me at
    <a href="mailto:abansekasly98@pm.me" class="email" title="Send Gmail">
      <AtSign strokeWidth={2} size={16} />
      abansekasly98
    </a>
  </p>

  <Socials />

  <p class="quote" title="Drive">{displayedText}</p>
</main>

<style>
  .main {
    max-width: 768px;
    height: fit-content;
    margin-inline: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    position: absolute;
    margin: auto;
    inset: 0;
  }

  .name-phonetic {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: none;
  }

  .profile-wrapper {
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin-inline: 4px;
    border-radius: 50%;
    mix-blend-mode: multiply;
    display: grid;
    place-items: center;
    pointer-events: none;
  }

  :global([data-theme="dark"]) .profile-wrapper {
    mix-blend-mode: normal;
  }

  .profile-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :global([data-theme="dark"]) .inline-logo {
    filter: invert(1) brightness(1);
  }

  .title {
    font-weight: 400;
    font-size: clamp(3rem, 5vw, 5rem);
    font-family: var(--font-2);
    text-decoration: underline;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    .highlight {
      color: var(--red);
      text-decoration: underline;
    }
  }

  .summary {
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  .inline-logo {
    width: 80px;

    :global([data-theme="dark"]) {
      filter: invert(1) brightness(1.2);
    }
  }

  a {
    width: fit-content;
    color: var(--red);
    font-weight: 500px;
    display: inline-flex;
  }

  .email-cta-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;

    .email {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      color: var(--red);
    }
  }

  .quote {
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    .main {
      width: 100%;
      height: unset;
      position: unset;
      margin-block-start: 50px;
    }

    .profile-wrapper {
      width: 50px;
      height: 50px;
      position: absolute;
      z-index: -1;
      left: 70%;
      bottom: calc(100% + 10px);
    }
  }
</style>
