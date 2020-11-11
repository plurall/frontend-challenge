import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"

import AlbumCard from '../AlbumCard';

configure({ adapter: new Adapter() });

const mockProps = {
    name: 'SRV', 
    images: [{url: 'https://i.scdn.co/image/5bd95fbc961256c56560d838bd74d05be50701d4'}], 
    releaseDate: '2020-07-17'
}

describe('AlbumCard', () => {  
  test('should render AlbumCard', () => {
    const wrapper = shallow(<AlbumCard {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });  
});