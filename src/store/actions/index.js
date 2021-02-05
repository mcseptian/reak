// related action may reside in one file
import { getRandomQuote } from "./quoteActions"

export * as ActionTypes from "./actionTypes"

export const actions = {
  // actions from all action providers
  GetRandomQuote: getRandomQuote
}
