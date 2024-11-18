<template>
  <div class="departures-table">
    <div class="departures-table__header departures-table__row">
      <span>Departure Time</span>
      <span>City Name</span>
      <span class="departures-table__code-title">Code</span>
      <span>Airline</span>
      <span>Gate</span>
      <span>Status</span>
    </div>

    <div v-for="(flight, index) in flights" :key="index" class="departures-table__flight departures-table__row">
      <span class="departures-table__cell departures-table__time-cell">
        {{ formatTime(flight.scheduledDepartureDateTime) }}</span
      >
      <span class="departures-table__cell--highlight departures-table__city-cell">
        {{ flight.arrivalAirport.cityName }}</span
      >
      <span class="departures-table__cell departures-table__code-cell">{{ flight.arrivalAirport.code }}</span>
      <span class="departures-table__cell departures-table__airline-cell">{{ flight.airline.name }}</span>
      <span
        class="departures-table__cell--highlight departures-table__gate-cell"
        :class="{ 'departures-table__gate-cell--hidden': !flight.departureGate }"
      >
        {{ flight.departureGate ? flight.departureGate.number : '' }}</span
      >
      <span class="departures-table__cell"><FlightStatus :status="flight.status" /></span>
    </div>
  </div>
</template>

<script>
import { formatTime } from '~/helpers/formatTime'
import FlightStatus from '~/components/FlightStatus'

export default {
  name: 'DeparturesTable',
  components: {
    FlightStatus
  },
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
    grid-template-columns: 15% 20% 10% 20% 10% 25%;
    border-radius: $border-radius;
    gap: 10px;
    overflow: hidden;
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

  @include breakpoint('small') {
    .departures-table__header {
      display: none;
    }

    &__flight {
      display: block;
      padding: 10px 20px;
    }

    &__cell {
      display: block;
    }

    .departures-table__gate-cell::before {
      content: 'Gate ';
    }

    &__gate-cell--hidden {
      display: none;
    }

    &__cell:first-child {
      text-align: right;
    }
  }

  @include breakpoint('medium') {
    padding: 10px;
    &__row {
      grid-template-columns: 15% 20% 23% 9% 28%;
    }

    &__code-cell,
    &__code-title {
      display: none;
    }
  }
}
</style>
