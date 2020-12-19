import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Search from 'views/Search';

describe('[Tela Busca]', () => {
  it('deve ser definido o componente', () => {

    expect(Search).toBeDefined();
  });

  it('deve equivaler ao snapshot', () => {
    const tree = shallow(
      <Search />
    );

    expect(tree).toMatchSnapshot();
  });

  it('deve chamar a função no onchange', () => {
    const wrapper = shallow(<Search />);

    wrapper.find('input.c-search__input').simulate('change', { target: {
      value: 'The Killers' }
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("calls onBlur function when textField is blurred", () => {
    const wrapper = shallow(<Search />);
    const spy = jest.spyOn(wrapper.instance(), "handleSearch");

    wrapper.instance().forceUpdate();
    wrapper.find("input.c-search__input").simulate("change", spy);
    expect(spy).toBeCalled();
  });
});
