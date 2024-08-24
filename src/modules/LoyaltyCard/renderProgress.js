const totalCutsRemaining = document.getElementById("totalCutsRemaining")
const totalCutsControll = document.getElementById("totalCutsControll")
const progressBar = document.getElementById("progressBar")

export function renderProgress({ loyaltyCard }) {
  const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard;

  totalCutsRemaining.innerText = cutsRemaining
  totalCutsControll.innerText = `${totalCuts} de ${cutsNeeded}`

  const progressAmount = (totalCuts * 100) / cutsNeeded

  progressBar.style.width = `${progressAmount}%`
}