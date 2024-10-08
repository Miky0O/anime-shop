document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      const cardId = card.getAttribute("data-id");
      window.location.href = `details.html?id=${cardId}`;
    });
  });
});
