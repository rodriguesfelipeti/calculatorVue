<template>
  <div id="app">
    <calcOrganism />
  </div>
</template>

<script>
import calcOrganism from "./components/organism/calcOrganism";
export default {
  name: "app",
  components: {
    calcOrganism
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#app {
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  height: 600px;
  width: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
