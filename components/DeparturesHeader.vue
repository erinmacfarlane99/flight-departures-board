<template>
  <div class="departures-header">
    <img class="departures-header__icon" src="~assets/icons/flightIcon.png" alt="Flight Icon" />
    <h1>Departures</h1>
  </div>
</template>

<script>
export default {
  name: 'DeparturesHeader'
}
</script>

<style lang="scss">
.departures-header {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: $primary-color;
  padding: 20px 40px;
  margin-bottom: 10px;
  gap: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  &__icon {
    width: 40px;
    height: auto;
  }
}
</style>
