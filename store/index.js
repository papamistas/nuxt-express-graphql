import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      casas: ''
    }),
    mutations: {
      increment(state) {
        state.counter++
      }
    }
  })
}

export default createStore
