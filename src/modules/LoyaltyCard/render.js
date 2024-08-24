import { history } from "./history"
import { progress } from "./progress"

const clientName = document.getElementById("clientName")
const clientSince = document.getElementById("clientSince")
const avatarImg = document.getElementById("avatarImg")

export function render({ data }) {
  const { appointmentHistory, loyaltyCard } = data

  avatarImg.src = data.avatarUrl
  clientName.innerText = data.name
  clientSince.innerText = `Cliente desde ${data.clientSince}`

  history({ appointmentHistory })
  progress({ loyaltyCard })

  console.log(data)
}