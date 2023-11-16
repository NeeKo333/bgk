import { Card } from "./card";

class CardList {
  constructor(cardSelector) {
    this.cards = document.querySelectorAll(cardSelector);
  }

  init() {
    this.cards.forEach((card) => new Card(card));
  }
}

export default new CardList(".card");
