import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../views/About';


// TestRendering test
it('About renders correctly', () => {
  const tree = renderer
    .create(<Router>
		  	<About/>
			</Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});