import { mount } from '@vue/test-utils'
import FlightStatus from '@/components/FlightStatus.vue'

describe('FlightStatus', () => {
  it('returns "green" when status is "Departed"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Departed'
      }
    })
    expect(wrapper.vm.statusColor).toBe('green')
  })

  it('returns "yellow" when status is "Delayed"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Delayed'
      }
    })
    expect(wrapper.vm.statusColor).toBe('yellow')
  })

  it('returns "yellow" when status is "Wait in Lounge"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Wait in Lounge'
      }
    })
    expect(wrapper.vm.statusColor).toBe('yellow')
  })

  it('returns "red" when status is "Cancelled"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Cancelled'
      }
    })
    expect(wrapper.vm.statusColor).toBe('red')
  })

  it('returns "red" when status is "Diverted"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Diverted'
      }
    })
    expect(wrapper.vm.statusColor).toBe('red')
  })

  it('returns "red" when status is "Final Call"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Final Call'
      }
    })
    expect(wrapper.vm.statusColor).toBe('red')
  })

  it('returns "blue" when status is "Go to Gate"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Go to Gate'
      }
    })
    expect(wrapper.vm.statusColor).toBe('blue')
  })

  it('returns "blue" when status doesn\'t match the other status colors', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'qwerty'
      }
    })
    expect(wrapper.vm.statusColor).toBe('blue')
  })

  it('returns "Final Call" when status is "Final Call for gate 1"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Final Call for gate 1'
      }
    })
    expect(wrapper.vm.statusText).toBe('Final Call')
  })

  it('returns "Go to Gate" when status is "Go to Gate 12"', () => {
    const wrapper = mount(FlightStatus, {
      propsData: {
        status: 'Go to Gate 12'
      }
    })
    expect(wrapper.vm.statusText).toBe('Go to Gate')
  })
})
