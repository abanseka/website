<script lang="ts">
  import githubIcon from "$lib/assets/github.svg";
  import linkedInIcon from "$lib/assets/linkedIn.svg";
  import xIcon from "$lib/assets/x.png";

  const socials = [
    {
      label: "linkedin",
      url: "https://linkedin.com/in/abanseka-sylvester/",
      img: linkedInIcon,
    },
    { label: "github", url: "https://github.com/abanseka", img: githubIcon },
    { label: "twitter", url: "https://twitter.com/abanseka_", img: xIcon },
  ];
</script>

<ul class="socials">
  {#each socials as social (social.label)}
    <li class="social-item">
      <a
        class="social-url"
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="social-icon" src={social.img} alt={social.label} />
      </a>
    </li>
  {/each}

  <p class="cta-container">
    &#10229;
    <span class="cta-text">shoot a direct DM to my X inbox</span>
  </p>
</ul>

<style>
  .socials {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  .social-url {
    color: var(--black);
    display: grid;
    place-items: center;
  }

  .social-icon {
    width: 25px;
    height: 25px;
  }

  :global([data-theme="dark"]) .social-icon {
    filter: invert(1) brightness(1.2);
  }

  .cta-container {
    display: flex;
    align-items: center;
    gap: calc(8 / 16 * 1rem);
  }

  .cta-text {
    font-size: clamp(0.5rem, 2vw, 1rem);
  }
</style>
