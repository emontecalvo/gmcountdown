
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Home from '../client/components/home'

import { expect } from 'chai';
import { shallow } from 'enzyme';
import {Provider} from 'react-redux';
import store from '../client/store';

const should = require('chai').should()
// import should from 'chai'.should()

describe('Home component', () => {
	it('should render the button', () => {
		const renderer = TestUtils.createRenderer()
		renderer.render(<Provider store={store}>
		<Home />
	</Provider>)
		const result = renderer.getRenderOutput()
		const button = result.props.children
		console.log("button is", button);
		console.log("result ", result.type.propTypes);

		button.className.should.equal('btn')
		// result.type.should.equal('div')
		
		// button.type.should.equal('button')
		// button.props.className.should.be.a('string')
		// button.props.should.have.property('onClick')
		// button.props.onClick.should.be.a('function')
	})
})
