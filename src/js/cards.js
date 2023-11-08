import { Card } from "./card";

class Cards {
  constructor(cardSelector) {
    this.cards = document.querySelectorAll(cardSelector);
  }

  init() {
    this.cards.forEach((card) => new Card(card));
  }
}

export default new Cards(".card");
