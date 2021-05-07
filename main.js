import "./style.css";
import { createElement } from "./utils/elements";
// import { getChampions } from "./utils/api";

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
          placeholder: "Search Champion",
          autofocus: true,
        }),
      ],
    }),
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
