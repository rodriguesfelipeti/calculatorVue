<template>
  <div id="app" @keyup="onKeyPress">
    <slideOnOff />  
    <calcOrganism/>
  </div>
</template>

<script>
import calcOrganism from "./components/organism/calcOrganism";
import slideOnOff from "./components/atom/slideOnOff";
import { mapActions } from 'vuex'

export default {
  name: "app",
  components: {
    calcOrganism,
    slideOnOff
  },
  methods: {
    ...mapActions('calculator', ['adicionarValor', 'adicionarOperacao']),


    onKeyPress(event) {
      const charCode = event.which
      if((charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105)){
        this.adicionarValor(event.key)

      }else if(charCode === '+' || charCode === '-' || charCode === '/' || charCode === 'x'){
        this.adicionarOperacao(number)
      }
    }
  } 
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#app {
  // background-image: linear-gradient(
  //   to right top,
  //   #051937,
  //   #004d7a,
  //   #008793,
  //   #00bf72,
  //   #a8eb12
  // );
  height: 600px;
  width: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
