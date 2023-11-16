export class Card {
  /**
   *
   * @param {HTMLElement} card
   */
  constructor(card) {
    this.card = card;
    this.toggle = this.card.querySelector(".card__more");
    this.cardClickHandler = this.cardClickHandler.bind(this);
    this.card.addEventListener("click", this.cardClickHandler);
  }

  cardClickHandler(e) {
    if(!this.card || !this.toggle || e.target !== this.toggle) return;

    this.card.classList.toggle("active");
    this.toggle.textContent = this.card.classList.contains("active")
      ? "Hide info"
      : "More info";
  }
}
