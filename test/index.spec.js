import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { mockFlights } from './mocks/mockFlights'
import FlightDeparturesBoard from '@/pages/index.vue'

describe('FlightDeparturesBoard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FlightDeparturesBoard)
  })

  it('renders loading spinner and message when loading is true', () => {
    const spinner = wrapper.find('.flight-departures-board__spinner')
    const loadingMessage = wrapper.text()

    expect(spinner.exists()).toBe(true)
    expect(loadingMessage).toContain('Loading flights...')
  })

  it('renders error message when error is true', async () => {
    wrapper.setData({ loading: false, error: true })

    await nextTick()
    const errorMessage = wrapper.text()

    expect(errorMessage).toContain('Error loading flights')
  })

  it('renders the departures table when flights are present', async () => {
    wrapper.setData({ flights: mockFlights, error: false, loading: false })

    await nextTick()
    const departuresTable = wrapper.find('.departures-table')

    expect(departuresTable.exists()).toBe(true)
  })
})
