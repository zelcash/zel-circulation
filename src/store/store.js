import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  sync: {}
}

const mutations = {
  updateSupply (state, payload) {
    state.sync = payload
  }
}

const actions = {
  getLastBlock (context) {
    return axios.get('https://explorer.zel.cash/api/sync')
      .then((response) => {
        context.commit('updateSupply', response.data)
      })
  }
}

const getters = {
  supply: state => {
    return ((state.sync.syncedBlocks - 5000) * 150) + 312500
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
