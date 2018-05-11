<template>
  <div class="hello">
    <h1>ZelCash Circulating Supply</h1>
    <h2>Total Zel: {{ supply }}</h2>
    <button @click="updateSupply()">Update!</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: mapGetters([
    'supply'
  ]),
  mounted: function () {
    this.$store.dispatch('getLastBlock')

    setInterval(function () {
      this.$store.dispatch('getLastBlock')
    }.bind(this), 60000)
  },
  methods: {
    updateSupply () {
      this.$store.dispatch('getLastBlock')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
