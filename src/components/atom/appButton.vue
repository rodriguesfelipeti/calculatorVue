<template lang="html">
  <section class="app-button">
    <button :class="classe" @click="setDisplay(number)">{{ number }}</button>
  </section>
</template>

<script lang="js">

import { mapActions } from 'vuex'

  export default  {
    name: 'app-button',
    props: ['number', 'classe'],
    mounted() {

    },
    data() {
      return {
      }
    },
    methods: {
      ...mapActions('calculator', ['adicionarValor', 'adicionarOperacao']),

      setDisplay(number) {
        if(this.classe === 'btn-operations'){
          this.adicionarOperacao(number)
        }else{
          this.adicionarValor(number)
        }
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.app-button {
  .btn-number-zero {
    background-color: lightgray;
    width: 150px;
    height: 73px;
    border: solid black 1px;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    outline: none;
    &:active {
      background-color: gray;
    }
  }
  .btn-number {
    background-color: lightgray;
    width: 75px;
    height: 73px;
    border: solid black 1px;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    outline: none;
    &:active {
      background-color: gray;
    }
  }
  .btn-operations {
    background-color: #ffa500;
    width: 75px;
    height: 73px;
    border: solid black 1px;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    outline: none;
    &:active {
      background-color: #b27300;
    }
  }
}
</style>
