<template>
  <div
    class="flight-status"
    :class="{
      'flight-status--red': statusColor === 'red',
      'flight-status--yellow': statusColor === 'yellow',
      'flight-status--green': statusColor === 'green',
      'flight-status--blue': statusColor === 'blue'
    }"
  >
    {{ statusText }}
  </div>
</template>

<script>
export default {
  name: 'FlightStatus',
  props: {
    status: {
      type: String,
      default: ''
    }
  },
  computed: {
    // Convert status to lowercase for comparison
    normalisedStatus() {
      return this.status.toLowerCase()
    },
    // Determine the status color based on the status
    statusColor() {
      if (this.isGreenStatus()) {
        return 'green'
      } else if (this.isYellowStatus()) {
        return 'yellow'
      } else if (this.isRedStatus()) {
        return 'red'
      } else {
        return 'blue' // Default to blue if no specific color is matched
      }
    },
    // Remove gate number from status text
    statusText() {
      if (this.normalisedStatus.includes('final call')) {
        return 'Final Call'
      } else if (this.normalisedStatus.includes('go to gate')) {
        return 'Go to Gate'
      } else {
        return this.status
      }
    }
  },
  methods: {
    // Check status colors based on the status text
    isGreenStatus() {
      return this.normalisedStatus.includes('departed')
    },
    isYellowStatus() {
      return this.normalisedStatus.includes('delayed') || this.normalisedStatus.includes('wait in lounge')
    },
    isRedStatus() {
      return (
        this.normalisedStatus.includes('cancelled') ||
        this.normalisedStatus.includes('diverted') ||
        this.normalisedStatus.includes('final call')
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.flight-status {
  display: inline-block;
  border-left: 8px solid;
  background-color: #fff;
  color: #000;
  border-radius: 4px 20px 20px 4px;
  padding: 10px 18px 10px 10px;
  min-width: 160px;
  width: auto;
  max-width: 100%;
  overflow: hidden;

  &--red {
    border-left-color: $status-red;
    color: $status-red;
  }

  &--yellow {
    border-left-color: $status-yellow;
  }

  &--green {
    border-left-color: $status-green;
    color: $status-green;
  }

  &--blue {
    border-left-color: $status-blue;
  }

  @include breakpoint('small') {
    padding: 6px 18px 6px 10px;
    margin-top: 6px;
  }
}
</style>
