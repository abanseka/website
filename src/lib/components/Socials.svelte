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
