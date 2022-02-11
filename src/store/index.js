import Vue from "vue";
import Vuex from "vuex";
import RateService from "../services/rate.service";

Vue.use(Vuex);
const state = {
  rates: {},
};

const getters = {
  rates: (state) => {
    return state.rates;
  },
};

const mutations = {
  setRates(state, rates) {
    state.rates = rates;
  },
};

const actions = {
  async fetchRates() {
    const rates = await RateService.fetchRates();
    const rateMap = {};
    rates.forEach((rate) => {
      rateMap[rate.to] = rate;
    });
    this.commit("setRates", rateMap);
  },
  setupPolling() {
    this.dispatch("fetchRates");
    setInterval(() => {
      this.dispatch("fetchRates");
    }, 5000);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
