import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom"; // our router

import { Button } from 'components';

describe('Renderização do Button', () => {

 it('deve ser definido o componente', () => {

   expect(Button).toBeDefined();
 });

 it('deve equivaler ao snapshot', () => {
  const tree = shallow(
    <Button
      href='/busca'
      text='button test'
    />
  );

  expect(tree).toMatchSnapshot();
});

 it('deve renderizar corretamente', () => {
   const tree = shallow(
      <Button
        href='/busca'
        text='button test'
      />
   );

   expect(tree).toMatchSnapshot();
 });

  it("deve ter o link passado como propriedade", () => {
    const link = '/busca';
    const element = shallow(<Button text={'Buscar'} href={link} />);

    expect(element.prop('to')).toEqual(link);
  });

  it("deve ter o link passado como propriedade", () => {
    const link = '/busca';

     const wrapper = mount(
      <MemoryRouter>
        <Button text={'Buscar'} href={link} />
      </MemoryRouter>
    );

    expect(wrapper.find('[href="/busca"]').length).toBe(2);
  });
});
