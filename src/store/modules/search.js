import { search } from "../../helpers/apple-music";

export default {
  namespaced: true,
  state: {
    keyword: "",
    results: [],
  },

  getters: {
    results(state) {
      return state.results;
    },
    keyword(state) {
      return state.keyword;
    },
  },
  mutations: {
    setKeyword(state, { keyword }) {
      state.keyword = keyword;
    },
    setSearchResults(state, { results }) {
      state.results = Object.assign(results);
    },
  },
  actions: {
    setKeyword({ commit }, { keyword }) {
      commit("setKeyword", { keyword });
    },
    search({getters}){
        // search(getters.keyword);
        console.log(encodeURI(getters.keyword));
    }
  },
};