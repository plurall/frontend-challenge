
import React from 'react';
import { shallow } from 'enzyme';
import Artist from 'views/Artist';

let wrapper;
const props = {
  match:{
    params:{
      id: 1
    }
  }
};

beforeEach(() => {
  wrapper = shallow(<Artist {...props} />);
});


describe('[Tela Artista]', () => {

  it('deve ser definido o componente', () => {

    expect(Artist).toBeDefined();
  });

  it('deve equivaler ao snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('deve chamar a função getArtistInfo no `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getArtistInfo');
    instance.componentDidMount();

    expect(instance.getArtistInfo).toHaveBeenCalledTimes(1);
  });

  it('deve chamar a função getArtistAlbums no `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getArtistAlbums');
    instance.componentDidMount();

    expect(instance.getArtistAlbums).toHaveBeenCalledTimes(1);
  });

});

