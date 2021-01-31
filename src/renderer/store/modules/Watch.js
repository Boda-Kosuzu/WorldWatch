const state = {
  watches: []
}

const mutations = {
  ADD_WATCH (state) {
    state.watches.push({
      name: '日本',
      timeZone: 'Asia/Tokyo',
      font: '',
      color: '000000',
      isOutline: false,
      outlineColor: '000000',
      isShadow: false,
      shadowColor: '000000'
    })
  },
  UPDATE_STANDARD_TIME (state, { timeZone, name, index }) {
    state.watches[index].timeZone = timeZone
    state.watches[index].name = name
  },
  UPDATE_FONT (state, { font, index }) {
    state.watches[index].font = font
  },
  UPDATE_COLOR (state, { color, index }) {
    state.watches[index].color = color
  },
  TOGGLE_OUTLINE (state, index) {
    state.watches[index].isOutline = !state.watches[index].isOutline
  },
  UPDATE_OUTLINE_COLOR (state, { color, index }) {
    state.watches[index].outlineColor = color
  },
  TOGGLE_SHADOW (state, index) {
    state.watches[index].isShadow = !state.watches[index].isShadow
  },
  UPDATE_SHADOW_COLOR (state, { color, index }) {
    state.watches[index].shadowColor = color
  },
  DELETE (state, index) {
    state.watches.splice(index, 1)
  }
}

const actions = {
  addWatch ({ commit }) {
    commit('ADD_WATCH')
  },
  updateStandardTime ({ commit }, data) {
    commit('UPDATE_STANDARD_TIME', data)
  },
  updateColor ({ commit }, data) {
    commit('UPDATE_COLOR', data)
  },
  updateFont ({ commit }, data) {
    commit('UPDATE_FONT', data)
  },
  toggleOutline ({ commit }, index) {
    commit('TOGGLE_OUTLINE', index)
  },
  updateOutlineColor ({ commit }, data) {
    commit('UPDATE_OUTLINE_COLOR', data)
  },
  toggleShadow ({ commit }, index) {
    commit('TOGGLE_SHADOW', index)
  },
  updateShadowColor ({ commit }, data) {
    commit('UPDATE_SHADOW_COLOR', data)
  },
  delete ({ commit }, index) {
    commit('DELETE', index)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
