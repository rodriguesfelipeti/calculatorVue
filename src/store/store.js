import Vue from "vue";
import Vuex from "vuex";

import calculator from "./modules/calculator";
import * as getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: { calculator }
});
