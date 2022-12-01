const containerGrid = document.querySelector(".container-grid");
const namePlayer = document.querySelector(".player");
const time = document.querySelector(".time");

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

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  const allCardsDisable = document.querySelectorAll(".disabled-card");

  if (allCardsDisable.length === 24) {
    clearInterval(this.loop);
    alert(
      `parabens ${namePlayer.innerHTML}! Seu tempo foi de ${time.innerHTML}`
    );
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("character-data");
  const secondCharacter = secondCard.getAttribute("character-data");

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (picture) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url("../assets/${picture}.jpg")`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);

  card.setAttribute("character-data", picture);

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

const startTime = () => {
  this.loop = setInterval(() => {
    const currentTime = +time.innerHTML;
    time.innerHTML = currentTime + 1;
  }, 1000);
};

window.onload = () => {
  namePlayer.innerHTML = localStorage.getItem("player");
  startTime();
  loadGame();
};
