const amount = document.getElementById("amount")
const historyList = document.getElementById("historyList")

export function renderHistory({ appointmentHistory }) {
  amount.innerText = `${appointmentHistory.length} cortes`

  historyList.innerHTML = ""

  appointmentHistory.forEach((appointment) => {
    const li = document.createElement("li")
    const firstContainer = document.createElement("div")

    const date = document.createElement("strong")
    date.innerText = appointment.date

    const time = document.createElement("span")
    time.innerText = appointment.time

    firstContainer.append(date, time)

    const secondContainer = document.createElement("div")
    const icon = document.createElement("img")
    icon.setAttribute("src", "./src/assets/icons/seal-check.svg")
    icon.setAttribute("alt", "Check")

    secondContainer.append(icon)

    li.append(firstContainer, secondContainer, secondContainer)

    historyList.append(li)
  })
}