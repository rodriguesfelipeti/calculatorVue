<template lang="html">
  <section class="calculator">
    <display />
    <div class="keyboard">
      <div class="groupButton">
        <appButton classe="btn-number" number="C" />
        <appButton classe="btn-number" number="+/-" />
        <appButton classe="btn-number" number="%" />
        <appButton classe="btn-operations" number="/" />
      </div>
      <div class="groupButton">
        <appButton classe="btn-number" number="7" />
        <appButton classe="btn-number" number="8" />
        <appButton classe="btn-number" number="9" />
        <appButton classe="btn-operations" number="x" />
      </div>
      <div class="groupButton">
        <appButton classe="btn-number" number="4" />
        <appButton classe="btn-number" number="5" />
        <appButton classe="btn-number" number="6" />
        <appButton classe="btn-operations" number="-" />
      </div>
      <div class="groupButton">
        <appButton classe="btn-number" number="1" />
        <appButton classe="btn-number" number="2" />
        <appButton classe="btn-number" number="3" />
        <appButton classe="btn-operations" number="+" />
      </div>
      <div class="groupButton">
        <appButton classe="btn-number-zero" number="0" />
        <appButton classe="btn-number" number="." />
        <appButton classe="btn-operations" number="=" />
      </div>
    </div>
  </section>
</template>

<script lang="js">

import display from '../atom/display'
import appButton from '../atom/appButton'

  export default  {
    name: 'calculator',
    components: {
      display,
      appButton
    },
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.calculator {
  .keyboard {
    .groupButton {
      display: flex;
      position: relative;
      left: 550px;
      &:first-child {
        margin-top: 30px;
      }
    }
  }
}
</style>
