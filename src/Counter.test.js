import React from "react";

//helps to get the component and wrap it up-> shallow is a wrapper
import { shallow } from "enzyme";
import Counter from "./Counter";

it('increments count by 1 when the increment button is clicked', () => {
    // Targeting component using shallow //render the component
    const wrapper = shallow(<Counter />)
    
    // Targeting the element using className in wrapper.find function
    const incrementButton = wrapper.find('button.increment')
    // Simulating action click using simulate function
    incrementButton.simulate('click')

    // Targeting element h1 and fetching text using text function
    const text = wrapper.find('h1').text()

    // Assertions
    expect(text).toEqual('Value : 1')
})