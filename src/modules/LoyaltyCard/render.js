import { history } from "./history"

const clientName = document.getElementById("clientName")
const clientSince = document.getElementById("clientSince")
const avatarImg = document.getElementById("avatarImg")

export function render({ data }) {
  avatarImg.src = data.avatarUrl
  clientName.innerText = data.name
  clientSince.innerText = `Cliente desde ${data.clientSince}`

  history({ appointmentHistory: data.appointmentHistory })

  console.log(data)
}