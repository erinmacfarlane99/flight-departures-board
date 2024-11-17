<template>
  <div class="flight-departures-board">
    <DeparturesHeader />
    <DeparturesTable :flights="flights" />
    <UpdateStatusForm :flights="flights" @update-flights="updateFlights" />
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
  data() {
    return {
      flights: []
    }
  },
  mounted() {
    this.getAllDepartures()
  },
  methods: {
    async getAllDepartures() {
      try {
        const response = await this.$axios.$get('https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata')
        this.flights = response.allDepartures
      } catch (error) {
        console.error(error)
      }
    },
    updateFlight(updatedFlights) {
      this.flights = updatedFlights
    }
  }
}
</script>

<style lang="scss">
.flight-departures-board {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
