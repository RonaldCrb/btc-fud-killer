import _ from 'lodash'

export const state = () => ({
  fud: [
    {
      title: 'bitcoin is a waste of energy',
      arguments: [
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
      ],
      categories: ['energy cosumption', 'weather', 'climate change'],
    },
    {
      title: 'bitcoin is too volatile',
      arguments: [
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
      ],
      categories: ['volatility', 'price'],
    },
    {
      title: 'bitcoin is a cult',
      arguments: [
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
      ],
      categories: ['cult', 'social'],
    },
    {
      title: 'bitcoin has no intrinsic value',
      arguments: [
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
        'lorem ipsum dolor sit amet......',
      ],
      categories: ['intrinsic value'],
    },
  ],
  filteredFud: [],
  currentCategory: 'all',
  categories: [],
  searchResults: [],
  searchTerm: '',
})

export const mutations = {
  /// CATEGORIES //////////////////////////////////////////////////////////
  setCategories(state, categories) {
    state.categories = categories
  },
  resetCategories(state) {
    state.categories = ['all']
  },
  selectCategory(state, cat) {
    state.currentCategory = cat
  },
  setFilteredFud(state, filteredFud) {
    state.filteredFud = filteredFud
  },
  setSearchTerm(state, searchTerm) {
    state.searchTerm = searchTerm
  },
}

export const actions = {
  setCategories({ commit, state }) {
    let categories = ['all']
    state.fud.forEach((f) => {
      f.categories.forEach((t) => {
        const repeated = categories.includes(t)
        if (!repeated) {
          categories = [...categories, t]
        }
      })
    })
    commit('setCategories', categories)
    commit('setFilteredFud', state.fud)
  },

  selectCategory({ commit }, cat) {
    commit('selectCategory', cat)
  },

  filterFudByCat({ commit, state }, cat) {
    if (state.currentCategory === 'all') {
      commit('setFilteredFud', state.fud)
    } else {
      let filteredFud = []
      state.fud.forEach((f) => {
        const match = f.categories.includes(cat)
        if (match) {
          filteredFud = [...filteredFud, f]
        }
      })
      commit('setFilteredFud', filteredFud)
    }
  },

  filterFudByTitle({ commit, state }, searchTerm) {
    commit('setSearchTerm', searchTerm)
    let filteredFud = []
    state.fud.forEach((f) => {
      if (_.startsWith(_.toLower(f.title), _.toLower(searchTerm))) {
        filteredFud = [...filteredFud, f]
      }
    })
    commit('setFilteredFud', filteredFud)
  },
}
