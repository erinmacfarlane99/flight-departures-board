<template>
  <div class="departures-table">
    <div class="departures-table__header departures-table__row">
      <span>Departure Time</span>
      <span>City Name</span>
      <span>Code</span>
      <span>Airline</span>
      <span>Gate</span>
      <span>Status</span>
    </div>

    <div v-for="(flight, index) in flights" :key="index" class="departures-table__flight departures-table__row">
      <span class="departures-table__cell">{{ formatTime(flight.scheduledDepartureDateTime) }}</span>
      <span class="departures-table__cell--highlight">{{ flight.arrivalAirport.cityName }}</span>
      <span class="departures-table__cell">{{ flight.arrivalAirport.code }}</span>
      <span class="departures-table__cell">{{ flight.airline.name }}</span>
      <span class="departures-table__cell--highlight"> {{ flight.departureGate?.number }}</span>
      <span class="departures-table__cell"><FlightStatus :status="flight.status" /></span>
    </div>
  </div>
</template>

<script>
import { formatTime } from '~/helpers/formatTime'

export default {
  name: 'DeparturesTable',
  props: {
    flights: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatTime
  }
}
</script>

<style lang="scss" scoped>
.departures-table {
  width: 100%;
  padding: 10px 40px;
  background: $background-gradient;

  &__header {
    background: $table-header-gradient;
    font-size: 0.9rem;
    padding: 10px 50px;
  }

  &__row {
    display: grid;
    grid-template-columns: 18.37% 20.41% 10.2% 20.41% 10.2% 20.41%;
    border-radius: $border-radius;
    gap: 10px;
  }

  &__flight {
    padding: 20px 50px;
    border: 1px solid #fff;
    margin-top: 10px;
    align-items: center;
  }

  &__cell {
    color: #fff;

    &--highlight {
      color: $primary-color;
    }
  }
}
</style>
