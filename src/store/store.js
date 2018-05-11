import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  dev: 0,
  sync: 0,
  total: 0
}

const mutations = {
  updateSupply (state, payload) {
    state.sync = payload
  },
  updateDev (state, payload) {
    state.dev = payload
  }
}

const actions = {
  getLastBlock (context) {
    return axios.get('https://explorer.zel.cash/api/sync')
      .then((response) => {
        context.commit('updateSupply', response.data.syncedBlocks)
      })
  },
  getDevPremine (context) {
    return axios.get('https://explorer.zel.cash/api/addr/t1W3DXSzNbXPWF7ghEU3xcqjLfBAKJGcmN4/')
      .then((response) => {
        context.commit('updateDev', response.data.balance)
      })
  }
}

const getters = {
  supply: state => {
    return ((state.sync - 5000) * 150) + 312500
  },
  dev: state => {
    return state.dev
  },
  total: state => {
    return ((state.sync - 5000) * 150) + 312500 + state.dev
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
