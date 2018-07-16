import {commonApi} from '../../api'
import Vue from 'vue';
import request from 'superagent'
import jsonp from 'superagent-jsonp'

// initial state
const state = {
  all: [{
    count: 123
  }],
  hotMovies: [],
  newMovies: [],
  topMovies: []
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
  },
  getMovie ({ commit }) {
    request
      .get('https://api.douban.com/v2/movie/in_theaters?count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getMovie',
            tag: 'hotMovies',
            res: res.body.subjects
          })
        }
      })
    request
      .get('https://api.douban.com/v2/movie/coming_soon?count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getMovie',
            tag: 'newMovies',
            res: res.body.subjects
          })
        }
      })
    request
      .get('https://api.douban.com/v2/movie/top250?count=8')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'getMovie',
            tag: 'topMovies',
            res: res.body.subjects
          })
        }
      })
  }
}

// mutations
const mutations = {
    setTestData (state, testData) {
        state.all = testData
        console.log('===', state)
    },

    productTestData (state, { id }) {
        // const testData = state.all.find(testData => testData.id === id)
        Vue.set(state.all[0], 'count', 'nihao')
    },
    getMovie (state, payload) {
      switch (payload.tag) {
        case 'hotMovies':
          state.hotMovies = payload.res
          console.log('123')
          break
        case 'newMovies':
          state.newMovies = payload.res
          break
        case 'topMovies':
          state.topMovies = payload.res
          break
        default:
          state.hotMovies = payload.res
      }
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}