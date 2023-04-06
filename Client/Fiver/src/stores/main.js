import { defineStore } from 'pinia'
// import axios from 'axios'

import { cards } from '../data'
export const useMainStore = defineStore('main', {
  state: () => ({
    cards: cards
  }),
  actions: {

  }
})
