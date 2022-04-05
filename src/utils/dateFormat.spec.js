//const formataData = require('./formataData');
import { default as DateFormat } from './dateFormat';

describe('Formatar data iso para pt-br', () => {
    it('de 2022-04-30 para 30/04/2022', () => {
        expect(DateFormat.format('2022-04-30', "pt-BR")).toBe('30/04/2022');
    });
});

describe('Formatar data iso para en-us', () => {
    it('de 2022-04-30 para 04/30/2022', () => {
        expect(DateFormat.format('2022-04-30', "en-us")).toBe('04/30/2022');
    });
});

describe('Tratamento de erro: Se o conteudo informado for um data invalida retornar ele mesmo', () => {
    it('Data inválida', () => {
        expect(DateFormat.format('Data inválida')).toBe('Data inválida');
    });
});