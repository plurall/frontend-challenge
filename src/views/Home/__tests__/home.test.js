import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import { shape } from 'prop-types';

import Home from '../Home';

configure({ adapter: new Adapter() });

const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {},
  },
};

const createContext = () => ({
    context: { router },
    childContextTypes: { router: shape({}) },
  });

function shallowWrap(node) {
  return shallow(node, createContext());
}

describe('Home', () => {  
  const wrappedShallow = () => shallowWrap(<Home />);
  test('should render home', () => {
    const wrapper = wrappedShallow();
    expect(wrapper).toMatchSnapshot();
  });
});