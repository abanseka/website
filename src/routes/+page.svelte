<script lang="ts">
  import Socials from "$lib/components/Socials.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<ThemeToggle />

<main class="main">
  <p class="name-phonetic">
    <code>/ˈa.banˈse.kə/</code>
    <code>/sɪlˈvɛs.tər/</code>
  </p>

  <h1 class="title">
    &#193;b&#224;ns<span class="highlight">&#399;ka</span>
    &nbsp;

    <div class="profile-wrapper">
      <img src="/profile.jpeg" alt="profile" fetchpriority="high" />
    </div>

    &#439;ylvester
    <span class="highlight">&#x031A;</span>
  </h1>

  <p class="summary">
    I'm a frontend developer focused on building clean, reliable, and
    user-friendly web solutions. currently working at

    <a href="https://archisacademy.com">
      <img
        src="/archis.svg"
        alt="archis"
        class="inline-logo"
        fetchpriority="high"
      />
    </a>
    and recently launched

    <a href="https://berikids.org">berikids.org</a> for an NGO supporting
    orphans in Cameroon.
    <br />
  </p>

  <p>
    you can always reach me at
    <span class="email">abansekasly98@gmail.com</span> or
  </p>

  <ul class="socials">
    <Socials />
  </ul>

  <div class="logo-wrapper">
    <img alt="logo" class="logo" src="/signature.svg" />
  </div>

  <p class="quote">Stay Hungry, Stay Foolish.</p>
</main>
