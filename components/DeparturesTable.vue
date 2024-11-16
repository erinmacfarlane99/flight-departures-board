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

    <div class="departures-table__flight departures-table__row">
      <span class="departures-table__flight__item">06.55</span>
      <span class="departures-table__flight__item--highlight">Toronto</span>
      <span class="departures-table__flight__item">YYZ</span>
      <span class="departures-table__flight__item">Air Canada</span>
      <span class="departures-table__flight__item--highlight">A4</span>
      <span class="departures-table__flight__item">Flight closing</span>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'DeparturesTable'
 }
</script>

<style lang="scss">
.departures-table {
  padding: 10px 40px;
  background: $background-gradient;

  &__header {
    background: $table-header-gradient;
    font-size: 0.8rem;
    padding: 10px 40px;
  }

  &__row {
    display: grid;
    grid-template-columns: 0.9fr 1fr 0.5fr 1fr 0.5fr 1fr;
    border-radius: 8px;
    gap: 10px;
  }

  &__flight {
    padding: 20px 40px;
    border: 1px solid #fff;
    margin-top: 10px;

    &__item {
      color: #fff;

      &--highlight {
        color: $primary-color;
      }
    }
  }
}
</style>