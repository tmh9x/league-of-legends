import "./style.css";
import { createElement } from "./utils/elements";
import { getChampions } from "./utils/api";
import { createChampionElement } from "./components/champion";
import { debounce } from "./utils/timer";

const championSection = createElement("main");
getChampions().then((champions) => {
  const championElements = Object.keys(champions).map((champion) =>
    createChampionElement(champions[champion])
  );
  console.log(championElements);
  championSection.append(...championElements);
});

const mainElement = createElement("main", {
  children: [
    createElement("header", {
      className: "hero",
      children: [
        createElement("h1", {
          className: "hero__title",
          innerText: "League of Legends",
        }),
        createElement("input", {
          className: "input",
          placeholder: "Filter Champion",
          autofocus: true,
          oninput: debounce((event) => {
            const filter = event.target.value;
            getChampions(filter).then((champions) => {
              const championElements = champions
                // .filter(champion)
                .map(createChampionElement);
              championSection.append(...championElements);
            });
          }, 300),
        }),
      ],
    }),
    championSection,
    createElement("footer", {
      className: "footer",
      children: [
        createElement("small", {
          className: "footer__info",
          children: [createElement("p", { innerText: "All Rights Reserved" })],
        }),
      ],
    }),
  ],
});

document.querySelector("#app").append(mainElement);
