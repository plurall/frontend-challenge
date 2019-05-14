import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Artistas from '../../views/artistas/artistas';

configure({ adapter: new Adapter() });

describe('Testes relativo às exigências da tela de busca de artistas', () => {
    test('deve ter um input', () => {
        const component = shallow(<Artistas />)
        expect(component.find('TextBox').length).toBe(1)
    })
})