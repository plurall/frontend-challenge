import {translate} from './';
import i18n from 'i18n-js';


describe('Traduzir para pt-br', () => {
    it('buscar artista pt-br', () => {
        i18n.defaultLocale = "pt-BR"
        expect(translate('home.buscar_artista')).toBe('Buscar artistas');
    });
});


describe('Traduzir para en-us', () => {
    it('buscar artista en-us', () => {
        i18n.defaultLocale = "en-US"
        expect(translate('home.buscar_artista')).toBe('Search artists');
    });
});