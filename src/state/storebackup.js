import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)
const {
  getUser,
  setUser,
  removeUser,
  // getToken,
  setToken,
  removeToken
} = require('../lib/storage');

const user = getUser();

const store = new Vuex.Store({
  modules,
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    drawer: null,
    currentUser: user,
    isLogged: !!user,
    loading: false,
    auth_error: null,
  },
  getters: {
    isLoading: state => state.loading,
    isLoggedIn: state => state.isLogged,
    currentUser: state => state.currentUser,
    authError: state => state.auth_error,
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },

    LOGIN (state) {
      state.loading = true
      state.auth_error = null
    },
    loginSuccess (state, payload) {
      console.log(payload)
      state.auth_error = null
      state.isLogged = true
      state.loading = false
      state.currentUser = Object.assign({}, payload)
      setUser(JSON.stringify(payload.user))
      setToken(payload.token)
   },
   loginFailed (state, payload) {
    state.loading = false
    state.auth_error = payload
    state.access = null
        removeUser()
        removeToken()
    },

    LOGOUT (state) {
      state.isLogged = false
      state.currentUser = null
      removeUser()
      removeToken()
   }
  },
  actions: {
    login (context) {
      context.commit('LOGIN')
    },
    logout (context) {
        context.commit('LOGOUT')
    },
  },
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

