<template lang="html">
  <section class="calc-organism">
    <calculator/>
    <img
      class="img1"
      v-show="easterEgg"
      src="https://i.giphy.com/media/3o7WIGxb4UDlYxZa1O/giphy.webp"
      onerror="this.onerror=null;this.src='https://i.giphy.com/3o7WIGxb4UDlYxZa1O.gif';"
      alt=""
    />
    <img
      class="img2"
      v-show="easterEgg"
      src="https://i.giphy.com/media/3o7WIGxb4UDlYxZa1O/giphy.webp"
      onerror="this.onerror=null;this.src='https://i.giphy.com/3o7WIGxb4UDlYxZa1O.gif';"
      alt=""
    />
  </section>
</template>

<script lang="js">

import calculator from '../molecule/calculator'
import { mapGetters } from 'vuex'

  export default  {
    name: 'calc-organism',
    components: {
      calculator
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
      ...mapGetters('calculator', {
            easterEgg: 'easterEgg'
        }),
    }
}
</script>

<style scoped lang="scss">
.calc-organism {
  .img1 {
    position: relative;
    bottom: 350px;
  }
  .img2 {
    position: relative;
    bottom: 350px;
    left: 800px;
  }
}
</style>
