<template>
  <div class="departures-header">
    <img class="departures-header__logo" src="~assets/icons/flightLogo.png" alt="Flight Icon">
    <h1>Departures</h1>
  </div>
</template>

<script>
export default {
  name: 'DeparturesHeader',
}
</script>

<style lang="scss">

.departures-header {
  display: flex;
  align-items: center;
  background-color: $primary-color;
  padding: 20px 40px;
  gap: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);


  &__logo {
    width: auto;
    height: 40px;
  }
}
</style>