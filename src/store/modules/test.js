import {commonApi} from '../../api'
import Vue from 'vue';

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getTestData ({ commit }) {
    commonApi.getDataSuccess({}).then(result => {
      commit('setTestData', result.data)
    })
  },
  add ({ commit }, data) {
    commit('productTestData', data)
  }
}

// mutations
const mutations = {
    setTestData (state, testData) {
        state.all = testData
        console.log('===', state)
    },

    productTestData (state, { id }) {
        const testData = state.all.find(testData => testData.id === id)
        Vue.set(state.all[0], 'count', 'nihao')
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}