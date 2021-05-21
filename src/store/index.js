import { createStore } from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import settings from './modules/settings'
// import user from './modules/user'
import tagsView from './modules/tagsView'

const store = createStore({
  modules: {
    app,
    permission,
    settings,
    // user,
    tagsView
  },
  getters
})

export default store