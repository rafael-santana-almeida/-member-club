import { loyaltyCardFetchById } from "../../services/loyalty-card-fetch-by-id";

const form = document.querySelector("form")
const loyaltyCardId = document.getElementById("loayaltyCardId")

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const id = loyaltyCardId.value

    await loyaltyCardFetchById({ id })

    loyaltyCardId.value = ""
  } catch (error) {
    console.log(error)
    alert("Erro ao buscar o cartão fidelidade, tente novamente mais tarde.")
  }
}