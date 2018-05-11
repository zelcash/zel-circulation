<template>
  <div class="hello">
    <h1>ZelCash Circulating Supply</h1>
    <table style="text-align: left; margin: auto; margin-bottom: 20px">
      <tr>
        <th>Description</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Total Zel</td>
        <td>{{ supply }}</td>
      </tr>
      <tr>
        <td>Dev Premine</td>
        <td>{{ dev }}</td>
      </tr>
      <tr>
        <td>Total in Circulation</td>
        <td>{{ total }}</td>
      </tr>
    </table>
    <button @click="updateSupply()">Update!</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: mapGetters([
    'supply',
    'dev',
    'total'
  ]),
  mounted: function () {
    this.$store.dispatch('getLastBlock')
    this.$store.dispatch('getDevPremine')

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
td {
  padding: 0 10px;
}
</style>
