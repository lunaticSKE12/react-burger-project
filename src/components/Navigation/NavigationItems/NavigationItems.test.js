import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({ adapter: new Adapter() })

describe('<NavigationItems />', () => {
  let wapper
  beforeEach(() => {
    wapper = shallow(<NavigationItems />)
  })
  it('should render two <NavigationItem /> elements if not authenticated', () => {

    expect(wapper.find(NavigationItem)).toHaveLength(2)
  })

  it('should render three <NavigationItem /> elements if authenticated', () => {
    // wapper = shallow(<NavigationItems isAuthenticated />)
    wapper.setProps({ isAuthenticated: true })
    expect(wapper.find(NavigationItem)).toHaveLength(3)
  })

  it('should render three <NavigationItem /> elements if authenticated', () => {
    wapper.setProps({ isAuthenticated: true })
    expect(wapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true)
  })
})