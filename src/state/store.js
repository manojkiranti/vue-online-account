import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

import { constantRoutes } from '../lib/routes'
// asyncRoutes,
// /**
//  * Use meta.role to determine if the current user has permission
//  * @param roles
//  * @param route
//  */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }

// /**
//  * Filter asynchronous routing tables by recursion
//  * @param routes asyncRoutes
//  * @param roles
//  */
// export function filterAsyncRoutes(routes, roles) {
//   const res = []

//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRoutes(tmp.children, roles)
//       }
//       res.push(tmp)
//     }
//   })

//   return res
// }


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
    //tag-view
    visitedViews: [],
    cachedViews: [],
    routes: constantRoutes,
    addRoutes: []
  },
  getters: {
    isLoading: state => state.loading,
    isLoggedIn: state => state.isLogged,
    currentUser: state => state.currentUser,
    authError: state => state.auth_error,
    visitedViews: state => state.visitedViews,
    cachedViews: state => state.cachedViews,
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    },
    //tagView
    ADD_VISITED_VIEW: (state, view) => {
 
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push(
        // Object.assign({},view)
        view
      )
    },
    ADD_CACHED_VIEW: (state, view) => {
      if (state.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
    },
  
    DEL_VISITED_VIEW: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    },
    DEL_CACHED_VIEW: (state, view) => {
      const index = state.cachedViews.indexOf(view.name)
      index > -1 && state.cachedViews.splice(index, 1)
    },
  
    DEL_OTHERS_VISITED_VIEWS: (state, view) => {
      state.visitedViews = state.visitedViews.filter(v => {
        return v.meta.affix || v.path === view.path
      })
    },
    DEL_OTHERS_CACHED_VIEWS: (state, view) => {
      const index = state.cachedViews.indexOf(view.name)
      if (index > -1) {
        state.cachedViews = state.cachedViews.slice(index, index + 1)
      } else {
        // if index = -1, there is no cached tags
        state.cachedViews = []
      }
    },
  
    DEL_ALL_VISITED_VIEWS: state => {
      // keep affix tags
      const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
      state.visitedViews = affixTags
    },
    DEL_ALL_CACHED_VIEWS: state => {
      state.cachedViews = []
    },
  
    UPDATE_VISITED_VIEW: (state, view) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    },
    //end of tag view
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

    // generateRoutes({ commit }, roles) {
    //   return new Promise(resolve => {
    //     let accessedRoutes
    //     if (roles.includes('admin')) {
    //       accessedRoutes = asyncRoutes || []
    //     } else {
    //       accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    //     }
    //     commit('SET_ROUTES', accessedRoutes)
    //     resolve(accessedRoutes)
    //   })
    // },
    login (context) {
      context.commit('LOGIN')
    },
    logout (context) {
        context.commit('LOGOUT')
    },

    //tag-view
    addView({ dispatch }, view) {

      dispatch('addVisitedView', view)
      dispatch('addCachedView', view)
    },
    addVisitedView({ commit }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    addCachedView({ commit }, view) {
      commit('ADD_CACHED_VIEW', view)
    },
  
    delView({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delVisitedView', view)
        dispatch('delCachedView', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delVisitedView({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_VISITED_VIEW', view)
        resolve([...state.visitedViews])
      })
    },
    delCachedView({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_CACHED_VIEW', view)
        resolve([...state.cachedViews])
      })
    },
  
    delOthersViews({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delOthersVisitedViews', view)
        dispatch('delOthersCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delOthersVisitedViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delOthersCachedViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_CACHED_VIEWS', view)
        resolve([...state.cachedViews])
      })
    },
  
    delAllViews({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delAllVisitedViews', view)
        dispatch('delAllCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delAllVisitedViews({ commit, state }) {
      return new Promise(resolve => {
        commit('DEL_ALL_VISITED_VIEWS')
        resolve([...state.visitedViews])
      })
    },
    delAllCachedViews({ commit, state }) {
      return new Promise(resolve => {
        commit('DEL_ALL_CACHED_VIEWS')
        resolve([...state.cachedViews])
      })
    },
  
    updateVisitedView({ commit }, view) {
      commit('UPDATE_VISITED_VIEW', view)
    }
  },
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

