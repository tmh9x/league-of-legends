import "./champion.css";
import { createElement } from "../utils/elements";

export function createChampionElement({
  image,
  name,
  title,
  blurb,
  info,
  tags,
}) {
  return createElement("div", {
    className: "championCard",
    children: [
      createElement("img", {
        src: `http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${image.full}`,
      }),

      createElement("h2", { innerText: name }),
      createElement("p", { innerText: title }),
      createElement("p", { innerText: blurb }),
      createElement("p", { innerText: "Attack: " + info.attack }),
      createElement("p", { innerText: "Defense: " + info.defense }),
      createElement("p", { innerText: "Magic: " + info.magic }),
      createElement("p", { innerText: "Difficulty " + info.difficulty }),
      createElement("p", { innerText: tags }),
    ],
  });
}
