import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
const Store = new Vuex.Store({
  modules: {
    user
  }
})

if (process.env.DEV && module.hot) {
  module.hot.accept(['./user'], () => {
    const newUser = require('./user').default
    Store.hotUpdate({ modules: { user: newUser } })
  })
}

export default Store
