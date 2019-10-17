<template lang="html">
  <section class="display">
    <div class="display-visor">
      <div class="content">
        {{ displayVal }}
      </div>
    </div>
  </section>
</template>

<script lang="js">

import { mapGetters } from 'vuex'

  export default  {
    name: 'display',
    mounted() {

    },
    methods: {

    },
    computed: {
      ...mapGetters('calculator', {
            displayVal: 'displayVal'
        }),
    }
}
</script>

<style scoped lang="scss">
.display {
  .display-visor {
    background: #000;
    width: 300px;
    height: 70px;
    position: relative;
    left: 550px;
    top: 30px;
    .content {
      color: #fff;
      font-weight: bold;
      text-align: right;
      font-size: 45px;
      margin-right: 5px;
      position: relative;
      top: 10px;
    }
  }
}
</style>
