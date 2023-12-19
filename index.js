//select each card from the carousel
document.querySelectorAll(".card").forEach((card) => {
    let clickCount = 0

    card.addEventListener("click", () => {
      if (card.previousElementSibling.checked) {
        // if the radio input is checked, increment the click count
        clickCount++

        if (clickCount === 1) {
          // on the second click, navigate to the next page
          window.location.href = "Art1/art.html"
        }
      } else {
        // if the radio input is unchecked, reset the click count
        clickCount = 0
      }
    })
  })