const socials = document.getElementById("socials");

const socialElements = [
  {
    label: "github",
    url: "https://github.com/abanseka",
    img: "./assets/github.svg",
  },
  {
    label: "linkedIn",
    url: "https://www.linkedin.com/in/abanseka-sylvester/",
    img: "./assets/linkedIn.svg",
  },
  {
    label: "twitter",
    url: "https://twitter.com/abanseka_",
    img: "./assets/x.png",
  },
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
