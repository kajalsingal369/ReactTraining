import React from 'react'
import {shallow,render,mount} from 'enzyme'
import OrderedList from '../components/OrderedList'
import OrderedOptionList from '../components/OrderedOptionList'
describe('test suites',()=>{
    it('render all mocked options',()=>{
        const names=['eshan','tanish','manish']
        const wrapper=render(<OrderedList options={name}/>)
        expect(wrapper.find('options')).toBeDefined();
        expect(wrapper.find('.value')).toHaveLength(names.length)
    });

});