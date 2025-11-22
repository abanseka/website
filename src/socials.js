import githubIcon from "/github.svg";
import linkedInIcon from "/linkedIn.svg";
import xIcon from "/x.png";

export default function Socials() {
  const socials = document.getElementById("socials");

  const socialElements = [
    {
      label: "linkedin",
      url: "https://linkedin.com/in/abanseka-sylvester/",
      img: linkedInIcon,
    },
    { label: "github", url: "https://github.com/abanseka", img: githubIcon },
    { label: "twitter", url: "https://twitter.com/abanseka_", img: xIcon },
  ];

  function renderSocials() {
    const socialItems = socialElements
      .map(
        (social) => `
      <li class="social-item">
        <a class="social-url" href="${social.url}" target="_blank" rel="noopener noreferrer">
          <img class="social-icon" src="${social.img}" alt="${social.label}" />
        </a>
      </li>
    `,
      )
      .join("");

    socials.innerHTML = socialItems;

    const directMessage = document.createElement("p");
    directMessage.classList.add("cta-container");
    directMessage.innerHTML = `
    &#10229;
    <span class="cta-text"> shoot a direct DM to my X inbox </span>
  `;
    socials.appendChild(directMessage);
  }

  renderSocials();
}
