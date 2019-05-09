import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from '../views/Search';


// TestRendering test
it('Search renders correctly', () => {
  const tree = renderer
    .create(<Router>
		  	<Search/>
			</Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});