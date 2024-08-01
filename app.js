/* Created by Tivotal */

let cards = document.querySelectorAll(".card");

window.onscroll = () => {
  let scrollHeight = window.innerHeight + window.screenY;
  cards.forEach((card) => {
    let cardTop = card.getBoundingClientRect().top + card.offsetHeight / 2;

    if (cardTop < scrollHeight) {
      card.classList.add("anim");
    } else {
      card.classList.remove("anim");
    }
  });
};
