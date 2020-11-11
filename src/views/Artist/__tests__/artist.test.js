import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import { shape } from 'prop-types';

import Artist from '../Artist';
import { AlbumCard } from '../../../components';

configure({ adapter: new Adapter() });

const artistMocked = {
  "genres": [
    "instrumental rock",
    "modern blues",
    "rock",
    "texas blues"
  ],
  "id": "5fsDcuclIe8ZiBD5P787K1",
  "images": [
    {
      "height": 1021,
      "url": "https://i.scdn.co/image/1de60c936683320769a1bfb6fba7f75902859085",
      "width": 1000
    },
    {
      "height": 654,
      "url": "https://i.scdn.co/image/5bd95fbc961256c56560d838bd74d05be50701d4",
      "width": 640
    }    
  ],
  "name": "Stevie Ray Vaughan",
  "popularity": 68
}

const albumMocked = {
  "items": [
    {
      "id": "1jxoZexZHDkPPyoxkanW5m",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f43584a669892a6fca22545d",
          "width": 640
        }      
      ],
      "name": "Album 1",
      "release_date": "2017-12-01"      
    },
    {
      "id": "1jxoZexZHDkPPyfdfdssdm",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f43584a669892a6fca22545d",
          "width": 640
        }      
      ],
      "name": "Album 2",
      "release_date": "2017-12-01"      
    }
  ]
}


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

describe('Artist', () => {  
  const wrappedShallow = () => shallowWrap(<Artist albums={albumMocked} artist={artistMocked} />);
  
  test('should render Artist page', () => {
    const wrapper = wrappedShallow();
    expect(wrapper).toMatchSnapshot();
  });

  test('should display release date on DD/MM/AAAA format', () => {
    const wrapper = wrappedShallow();
    expect(wrapper.find(AlbumCard).length).toEqual(2);
    expect(wrapper.find(AlbumCard).first().html()).toContain('01/12/2017');    
  });
});