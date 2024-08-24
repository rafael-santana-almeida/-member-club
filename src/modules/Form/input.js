const loyaltyCardId = document.getElementById("loayaltyCardId")
const submitButton = document.querySelector("[type=submit]")

loyaltyCardId.addEventListener("input", function () {
  const value = loyaltyCardId.value

  if (!value.length) {
    submitButton.setAttribute("disabled", true)
    return
  }

  submitButton.removeAttribute("disabled")
})