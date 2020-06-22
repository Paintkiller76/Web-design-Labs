import Vue from 'vue'
import Vuex from 'vuex'
import Model from '../model/model.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: new Model(["Windows"], "Windows", "Ні", "", "")
  },
  mutations: {
  setQuizData(state, quizData){
      state.quiz = quizData;
  }
  },
})
