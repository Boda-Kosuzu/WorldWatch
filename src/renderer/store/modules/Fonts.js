import fontManager from 'font-manager'

const state = {
  fonts: []
}

const mutations = {
  LOAD (state, fonts) {
    state.fonts = fonts.map(({ family }) => family)
  }
}

const actions = {
  async load ({ commit }) {
    const fonts = await fontManager.getAvailableFontsSync()
    commit('LOAD', fonts)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
