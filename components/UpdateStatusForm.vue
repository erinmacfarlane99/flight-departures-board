<template>
  <form class="update-status-form" @submit.prevent="updateFlightStatus">
    <h2 class="update-status-form__title">Update Flight Status</h2>

    <div>
      <label for="flight-select">Select Flight:</label>
      <select id="flight-select" v-model="selectedFlightId" class="update-status-form__flight-select">
        <option v-for="flight in flights" :key="flight.flightNumber" :value="flight.flightNumber">
          {{ formatTime(flight.scheduledDepartureDateTime) }} - {{ flight.arrivalAirport.cityName }} -
          {{ flight.airline.name }}
        </option>
      </select>
    </div>

    <div>
      <div class="update-status-form__status-options">
        <label class="update-status-form__label">Choose Status:</label>

        <div class="update-status-form__status-option">
          <input id="status-cancelled" v-model="newStatus" type="radio" value="Cancelled" />
          <label for="status-cancelled">Cancelled</label>
        </div>

        <div class="update-status-form__status-option">
          <input id="status-delayed" v-model="newStatus" type="radio" value="Delayed" />
          <label for="status-delayed">Delayed</label>
        </div>

        <div class="update-status-form__status-option">
          <input id="status-departed" v-model="newStatus" type="radio" value="Departed" />
          <label for="status-departed">Departed</label>
        </div>

        <div class="update-status-form__status-option">
          <input id="status-diverted" v-model="newStatus" type="radio" value="Diverted" />
          <label for="status-diverted">Diverted</label>
        </div>

        <div class="update-status-form__status-option">
          <input id="status-other" v-model="newStatus" type="radio" value="Other" />
          <label for="status-other">Other</label>
          <input
            v-if="newStatus === 'Other'"
            v-model="customStatus"
            class="update-status-form__status-input"
            type="text"
            maxlength="20"
            placeholder="Enter custom status"
          />
        </div>
      </div>
    </div>

    <button class="update-status-form__submit-button" type="submit">Update Status</button>
    <span v-if="errorMessage" class="update-status-form__error-message">{{ errorMessage }}</span>
  </form>
</template>

<script>
import { formatTime } from '~/helpers/formatTime'

export default {
  name: 'UpdateStatusForm',
  props: {
    flights: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedFlightId: null,
      newStatus: '',
      customStatus: '',
      errorMessage: ''
    }
  },
  watch: {
    // Reset error message when selected flight or status changes
    selectedFlightId() {
      this.errorMessage = ''
    },
    newStatus() {
      this.errorMessage = ''
    }
  },
  methods: {
    formatTime,
    updateFlightStatus() {
      // Make a copy of the flights array to avoid mutating the prop directly
      const updatedFlights = [...this.flights]

      // Find the selected flight by id
      const selectedFlight = updatedFlights.find((flight) => flight.flightNumber === this.selectedFlightId)

      if (selectedFlight && this.newStatus) {
        // Update the status of the selected flight
        const statusToUpdate = this.newStatus === 'Other' ? this.customStatus : this.newStatus
        selectedFlight.status = statusToUpdate

        // Emit updated flights with new status to index page
        this.$emit('update-flight-status', updatedFlights)

        this.selectedFlightId = null
        this.newStatus = ''
        this.customStatus = ''
      } else {
        this.errorMessage = 'Please select a flight and status'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.update-status-form {
  background: $table-header-gradient;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: fit-content;
  padding: 40px;
  margin: 20px 0px;
  border-radius: $border-radius;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  position: relative;

  &__flight-select {
    padding: 4px;
    border-radius: $border-radius;
  }

  &__status-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__status-option {
    font-weight: 500;
  }

  // Make radio buttons black
  input[type='radio'] {
    accent-color: #000;
  }

  &__status-input {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: $border-radius;
    padding: 4px;
  }

  &__submit-button {
    background-color: $primary-color;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      background-color: #ddbc4e;
    }
  }

  &__error-message {
    color: $status-red;
    font-size: 0.9rem;
    text-align: center;
    position: absolute;
    bottom: 10px;
    right: 0;
    width: 100%;
  }

  @include breakpoint('small') {
    padding: 20px;
    margin: 20px;
  }
}
</style>
