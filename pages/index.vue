<template>
  <div class="flight-departures-board">
    <DeparturesHeader />
    <DeparturesTable />
  </div>
</template>

<script>
import DeparturesHeader from '~/components/DeparturesHeader'
import DeparturesTable from '~/components/DeparturesTable'

export default {
  name: 'FlightDeparturesBoard',
  components: {
    DeparturesHeader,
    DeparturesTable
  },
}
</script>

<style lang="scss">
.flight-departures-board {
  margin: 20px;
}
</style>