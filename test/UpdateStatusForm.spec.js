import { mount } from '@vue/test-utils'
import { mockFlights } from './mocks/mockFlights'
import UpdateStatusForm from '@/components/UpdateStatusForm.vue'

describe('UpdateStatusForm', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(UpdateStatusForm, {
      propsData: {
        flights: mockFlights
      }
    })
  })

  it('renders the form with a dropdown for flight selection', () => {
    const selectWrapper = wrapper.find('#flight-select')
    const options = selectWrapper.findAll('option')
    expect(options.length).toBe(mockFlights.length)
  })

  it('updates flight status when a status is selected and the form is submitted', async () => {
    // Simulate a form submission
    await wrapper.setData({ selectedFlightId: 'AF1669' })
    await wrapper.setData({ newStatus: 'Delayed' })

    // Trigger form submission and emit update-flight-status event
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.emitted()['update-flight-status']).toBeTruthy()

    const eventEmit = wrapper.emitted()['update-flight-status'][0]
    const eventParam = eventEmit[0]

    expect(eventParam[0].status).toBe('Delayed')
  })

  it('shows an error message when no flight is selected and form is submitted', async () => {
    await wrapper.setData({ newStatus: 'Delayed' })
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.text()).toContain('Please select a flight and status')
  })

  it('shows an error message when no status is selected and form is submitted', async () => {
    await wrapper.setData({ selectedFlightId: 'AF1669' })
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.text()).toContain('Please select a flight and status')
  })

  it('clears error message after a flight is selected', async () => {
    // Trigger form submission with nothing selected
    await wrapper.find('form').trigger('submit.prevent')

    // Select a flight
    await wrapper.setData({ selectedFlightId: 'AF1669' })

    expect(wrapper.text()).not.toContain('Please select a flight and status')
  })

  it('clears error message after a status is selected', async () => {
    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.setData({ newStatus: 'Delayed' })

    expect(wrapper.text()).not.toContain('Please select a flight and status')
  })

  it('clears status and flight selection when form is reset', async () => {
    // Simulate a valid form submission
    await wrapper.setData({ selectedFlightId: 'AF1669' })
    await wrapper.setData({ newStatus: 'Delayed' })
    await wrapper.find('form').trigger('submit.prevent')

    // Ensure flight, status and custom status are cleared
    expect(wrapper.vm.selectedFlightId).toBeNull()
    expect(wrapper.vm.newStatus).toBe('')
    expect(wrapper.vm.customStatus).toBe('')
  })

  it('renders the custom status input when "Other" status is selected', async () => {
    // Simulate selecting the "Other" status
    await wrapper.setData({ newStatus: 'Other' })

    // Ensure custom status input is visible
    const customStatusInput = wrapper.find('.update-status-form__status-input')
    expect(customStatusInput.exists()).toBe(true)
  })
})
