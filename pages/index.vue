<template>
  <div class="flight-departures-board">
    <DeparturesHeader />

    <div v-if="loading" class="flight-departures-board__state-container">
      <div class="flight-departures-board__spinner"></div>
      <span>Loading flights...</span>
    </div>

    <div v-else-if="error" class="flight-departures-board__state-container">
      <img class="flight-departures-board__error-icon" src="~assets/icons/errorIcon.png" alt="Error Icon" />
      <span class="flight-departures-board__error-message">Error loading flights</span>
    </div>

    <div v-else-if="flights.length > 0" class="flight-departures-board__table-form-container">
      <DeparturesTable :flights="flights" />
      <UpdateStatusForm :flights="flights" @update-flight-status="updateFlightStatus" />
    </div>
  </div>
</template>

<script>
import DeparturesHeader from '~/components/DeparturesHeader'
import DeparturesTable from '~/components/DeparturesTable'
import UpdateStatusForm from '~/components/UpdateStatusForm'

export default {
  name: 'FlightDeparturesBoard',
  components: {
    DeparturesHeader,
    DeparturesTable,
    UpdateStatusForm
  },
  data() {
    return {
      flights: [],
      loading: true,
      error: false
    }
  },
  mounted() {
    this.getAllDepartures()
  },
  methods: {
    async getAllDepartures() {
      try {
        // Make API call to get flight data
        const response = await this.$axios.$get('https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata')

        // Populate the flights array with the API response
        this.flights = response.allDepartures
        this.loading = false
      } catch (error) {
        this.error = true
      }
    },
    // Update flight status in the flights array when the form is submitted
    updateFlightStatus(updatedFlights) {
      this.flights = updatedFlights
    }
  }
}
</script>

<style lang="scss">
.flight-departures-board {
  &__state-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  &__spinner {
    border: 4px solid #d3d3d3;
    border-top: 4px solid #000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &__error {
    &-message {
      color: $status-red;
    }

    &-icon {
      width: 30px;
      height: auto;
    }
  }

  &__table-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
