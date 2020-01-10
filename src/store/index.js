import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../network/axios";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userLogin: false,
    token: null,
    userInformation: null
  },
  mutations: {
    //sync
    setToken(state, token) {
      state.token = token
    },
    setUserInformation(state, information) {
      state.userInformation = information
      state.userLogin = true
    },
    logout(state){
      //tell to server user was logout
      state.userLogin = false
      state.token = null
      state.userInformation = null
    }
  },
  actions: {
    //async
    requestToken({commit}, acceptedUser) {
      // request token from API through axios and acceptedUser
      let token = null
      if (acceptedUser) token = 1111
      commit("setToken", token)
    },
    requestUserInformation({commit, state}) {
      if (state.token) {
        //request user information through api

        const information = {
          username: "fanny",
          level: 1,
          unread: 0
        }

        commit("setUserInformation", information)
      }
    }
  },
  getters: {
    userLogin(state) {
      return state.userLogin
    },
    userInformation(state) {
      return state.userInformation
    },
  }
  ,
  modules: {}
})
export default store