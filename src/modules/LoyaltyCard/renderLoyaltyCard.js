const customerId = document.getElementById("customer-id")
const slotsContainer = document.getElementById("slots-container")

export function renderLoyaltyCard({ loyaltyCard, id }) {
  const { totalCuts, cutsNeeded } = loyaltyCard

  customerId.innerText = `ID: ${id}`

  slotsContainer.innerHTML = ""

  for (let index = 1; index <= cutsNeeded; index++) {
    const slot = document.createElement("div")
    slot.classList.add("slot")

    if (index <= totalCuts) {
      const check = document.createElement("img")
      check.setAttribute("src", "./src/assets/PinCheck.png")
      check.setAttribute("alt", "Check")

      slot.append(check)
    }

    if (index === cutsNeeded) {
      const gift = document.createElement("img")
      gift.setAttribute("src", "./src/assets/icons/gift-fill.svg")
      gift.setAttribute("alt", "Ícone de presente")
      gift.classList.add("gift-icon")

      slot.append(gift)
    }

    if (index === cutsNeeded && totalCuts === cutsNeeded) {
      slot.innerHTML = ""

      const gift = document.createElement("img")
      gift.setAttribute("src", "./src/assets/PinGift.png")
      gift.setAttribute("alt", "Ícone de presente")

      slot.append(gift)
    }

    slotsContainer.append(slot)
  }
}