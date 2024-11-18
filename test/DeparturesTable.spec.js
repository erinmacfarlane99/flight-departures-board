import { mount } from '@vue/test-utils'
import { mockFlights } from './mocks/mockFlights'
import DeparturesTable from '@/components/DeparturesTable.vue'

describe('DeparturesTable', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(DeparturesTable, {
      propsData: {
        flights: mockFlights
      }
    })
  })

  it('renders the correct number of flight rows', () => {
    expect(wrapper.findAll('.departures-table__flight')).toHaveLength(mockFlights.length)
  })

  it('renders the correct departure time', () => {
    expect(wrapper.find('.departures-table__time-cell').text()).toBe('10:30')
  })

  it('renders the correct city name', () => {
    expect(wrapper.find('.departures-table__city-cell').text()).toBe('Paris')
  })

  it('renders the correct airport code', () => {
    expect(wrapper.find('.departures-table__code-cell').text()).toBe('CDG')
  })

  it('renders the correct airline name', () => {
    expect(wrapper.find('.departures-table__airline-cell').text()).toBe('Air France')
  })

  it('renders the correct gate number', () => {
    expect(wrapper.find('.departures-table__gate-cell').text()).toBe('A5')
  })

  it('renders blank cell for empty gate number', () => {
    const gateCells = wrapper.findAll('.departures-table__gate-cell')
    expect(gateCells.at(8).text()).toBe('')
  })
})
