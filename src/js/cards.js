export const Cards = {
  init() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) =>
      card.addEventListener("click", this.cardClickHandler.bind(this))
    );
  },

  cardClickHandler(e) {
    if (!e.target.classList.contains('card__more')) return;

    const card = e.currentTarget;
    const moreBtn = e.target;

    const { footer, paymentsBlock, arrow } = this.getCardElements(card);

    footer.classList.toggle("active");
    paymentsBlock.classList.toggle("active");
    arrow.classList.toggle("active");

    moreBtn.textContent = arrow.classList.contains('active') ? 'Hide info' : 'More info'
  },

  getCardElements(card) {
    return {
      footer: card.querySelector(".card__footer"),
      paymentsBlock: card.querySelector(".card__payments-list"),
      arrow: card.querySelector(".card__arrow"),
    };
  },
};
