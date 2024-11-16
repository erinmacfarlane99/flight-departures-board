<template>
  <div class="flight-departures-board">
    <DeparturesHeader />
  </div>
</template>

<script>
import DeparturesHeader from '~/components/DeparturesHeader'

export default {
  name: 'FlightDeparturesBoard',
  components: {
    DeparturesHeader
  },
}
</script>

<style lang="scss">
.flight-departures-board {
  margin: 20px;
}
</style>