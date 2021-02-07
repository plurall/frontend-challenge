//const formataData = require('./formataData');
import { default as FormataData } from './formataData';

describe('Deve formatar a data', () => {
    it('de 2020-03-02 para 02/03/2020', () => {
        expect(FormataData.toPtBr('2020-03-02')).toBe('02/03/2020');
    });
});