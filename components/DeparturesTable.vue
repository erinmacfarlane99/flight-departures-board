<template>
  <div class="departures-table">
    <div class="departures-table__header departures-table__row">
      <span class="departures-table__header__item">Departure Time</span>
      <span class="departures-table__header__item">City Name</span>
      <span class="departures-table__header__item">Code</span>
      <span class="departures-table__header__item">Airline</span>
      <span class="departures-table__header__item">Gate</span>
      <span class="departures-table__header__item">Status</span>
    </div>

    <div v-for="(flight, index) in flights" :key="index" class="departures-table__flight departures-table__row">
      <span class="departures-table__flight__item">{{ formatTime(flight.scheduledDepartureDateTime) }}</span>
      <span class="departures-table__flight__item--highlight">{{ flight.arrivalAirport.cityName }}</span>
      <span class="departures-table__flight__item">{{ flight.arrivalAirport.code }}</span>
      <span class="departures-table__flight__item">{{ flight.airline.name }}</span>
      <span class="departures-table__flight__item--highlight"> {{ flight.departureGate?.number }}</span>
      <span class="departures-table__flight__item"><FlightStatus :status="flight.status" /></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeparturesTable',
  props: {
    flights: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatTime(dateString) {
      const date = new Date(dateString)
      return date.toTimeString().slice(0, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
.departures-table {
  padding: 10px 40px;
  background: $background-gradient;

  &__header {
    background: $table-header-gradient;
    font-size: 0.9rem;
    padding: 10px 50px;
  }

  &__row {
    display: grid;
    grid-template-columns: 0.9fr 1fr 0.5fr 1fr 0.5fr 1fr;
    border-radius: 8px;
    gap: 10px;
  }

  &__flight {
    padding: 20px 50px;
    border: 1px solid #fff;
    margin-top: 10px;
    align-items: center;

    &__item {
      color: #fff;

      &--highlight {
        color: $primary-color;
      }
    }
  }
}
</style>
