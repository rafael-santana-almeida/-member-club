import { render } from "../modules/LoyaltyCard/render"

import { apiConfig } from "./api-config"

export async function loyaltyCardFetchById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`)
    const data = await response.json()

    render({ data })
  } catch (error) {
    alert("ID invlálido, tente novamente mais tarde.")
    console.log(error)
  }
}