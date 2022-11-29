const containerGrid = document.querySelector(".container-grid");

const pictures = [
  "bruine",
  "dijk",
  "grealish",
  "lukaku",
  "neuer",
  "reus",
  "vini",
  "cristiano",
  "mbappe",
  "messi",
  "ney",
  "depay",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const revealCard = ({ target }) => {
  target.parentNode.classList.add("reveal-card");
};

const createCard = (picture) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url("../assets/${picture}.jpg")`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);

  return card;
};

const loadGame = () => {
  const duplicatePictures = [...pictures, ...pictures];

  const shuffleCards = duplicatePictures.sort(() => Math.random() - 0.5);

  shuffleCards.forEach((picture) => {
    const card = createCard(picture);
    containerGrid.appendChild(card);
  });
};

loadGame();
