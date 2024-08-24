import { renderHistory } from "./renderHistory"
import { renderLoyaltyCard } from "./renderLoyaltyCard"
import { renderProgress } from "./renderProgress"

const clientName = document.getElementById("clientName")
const clientSince = document.getElementById("clientSince")
const avatarImg = document.getElementById("avatarImg")
const mainContent = document.getElementById("main-content")

export function render({ data }) {
  const { appointmentHistory, loyaltyCard, id } = data

  avatarImg.src = data.avatarUrl
  clientName.innerText = data.name
  clientSince.innerText = `Cliente desde ${data.clientSince}`

  renderHistory({ appointmentHistory })
  renderProgress({ loyaltyCard })
  renderLoyaltyCard({ loyaltyCard, id })

  mainContent.classList.remove("hidden")
}