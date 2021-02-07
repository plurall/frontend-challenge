import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'

import { default as Album} from './Album';


describe('A seleção de imagem', () =>{
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('deve retornar a penultima da lista', () => {
        const cardAlbum = new Album({});

        const album = {
            name: 'Raphael`s day',
            images: [
                {url: 'https://teste.com/image01.jpg'},
                {url: 'https://teste.com/image02.jpg'},
                {url: 'https://teste.com/image03.jpg'}
            ]
        };

        const ultimaImagem = cardAlbum.getPenultimaImagem(album);

        expect(ultimaImagem).not.toBeNull();
        expect(ultimaImagem).not.toBe(undefined);

        // verifico que o elemento gerado foi do tipo img
        ReactTestUtils.isElementOfType(ultimaImagem, <img/>);

        // Test first render and componentDidMount
        ReactTestUtils.act(() => {
            //Adiciona no container o elemento gerado pelo retorno da função
            ReactDOM.render(ultimaImagem, container);
        });

        // Busco pelo elemento do tipo IMG no container
        const image = container.querySelector('img');

        // verifico que o elemento IMG foi encontrado
        expect(image).not.toBeNull();

        // Verifico que a URL do elemento IMG é a penúltima da lista
        const url = album.images[1].url;
        expect(image.src).toBe(url);
    });

    it('deve retornar sem foto', () => {
        const cardAlbum = new Album({});

        const album = {
            name: 'Raphael`s day',
            id: '001',
            images: []
        };

        const ultimaImagem = cardAlbum.getPenultimaImagem(album);

        expect(ultimaImagem).not.toBeNull();
        expect(ultimaImagem).not.toBe(undefined);

        // verifico que o elemento gerado foi do tipo div
        ReactTestUtils.isElementOfType(ultimaImagem, <div/>);

        // Test first render and componentDidMount
        act(() => {
            //Adiciona no container o elemento gerado pelo retorno da função
            ReactDOM.render(ultimaImagem, container);
        });

        // Busco pelo elemento DIV pelo id dele
        const divElement = container.querySelector('#album_001');

        // verifico que o elemento DIV foi encontrado
        expect(divElement).not.toBeNull();

        // Verifico que a no lugar da imagem a DIV com o texto "Sem foto" foi retornada
        expect(divElement.id).toBe('album_001');
        expect(divElement.textContent).toBe('Sem capa de album');
    });
});