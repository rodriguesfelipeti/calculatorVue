export default {
  namespaced: true,
  state: {
    result: 0,
    firstVal: false,
    secondVal: false,
    displayVal: 0,
    operations: false,
    easterEgg: false,
    onOff: false
  },
  getters: {
    displayVal(state) {
      return state.displayVal;
    },
    easterEgg(state) {
      return state.easterEgg;
    },
    onOff(state) {
      return state.onOff;
    }
  },
  mutations: {
    adicionarValor(state, number) {
      if (number === "C") {
        state.displayVal = 0;
        state.firstVal = false;
        state.secondVal = false;
        state.operations = false;
        state.easterEgg = false;
      } else {
        if (state.firstVal && state.operations) {
          if (!state.secondVal) {
            state.secondVal = number;
            state.displayVal = number;
          } else {
            state.secondVal += number;
            state.displayVal = state.secondVal;
          }
        } else {
          if (!state.firstVal) {
            state.firstVal = number;
            state.displayVal = number;
          } else {
            state.firstVal += number;
            state.displayVal = state.firstVal;
          }
        }
      }
    },
    adicionarOperacao(state, number) {
      if (number === "=" && state.secondVal) {
        switch (state.operations) {
          case "+":
            state.result =
              parseFloat(state.firstVal) + parseFloat(state.secondVal);
            break;
          case "-":
            state.result =
              parseFloat(state.firstVal) - parseFloat(state.secondVal);
            break;
          case "x":
            state.result =
              parseFloat(state.firstVal) * parseFloat(state.secondVal);
            break;
          case "/":
            state.result =
              parseFloat(state.firstVal) / parseFloat(state.secondVal);
            break;
          default:
            break;
        }

        if (state.result === 1000) {
          state.easterEgg = true;
        }

        state.displayVal = state.result;
        state.firstVal = state.result;
        state.secondVal = false;
        state.operations = false;
      }

      state.operations = number;
    },

    turnOnOffCalc(state, value){
      if(value){
        state.onOff = false
        state.displayVal = 0;
        state.firstVal = false;
        state.secondVal = false;
        state.operations = false;
        state.easterEgg = false;
      }else{
        state.onOff = true
      }
    }
  },
  actions: {
    adicionarValor(context, number) {
      context.commit("adicionarValor", number);
    },
    adicionarOperacao(context, number) {
      context.commit("adicionarOperacao", number);
    },
    turnOnOffCalc(context, value) {
      context.commit("turnOnOffCalc", value)
    }
  }
};
