import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

//View a ser testada
import { default as Busca} from './Busca';

/**
 * Componentes da View que precisam de mock.
 * Apesar de não estarem sendo usado aqui eles precisam
 * ser importados para que o mock possa substituí-los
 * durante o lazy-load deles
 */
import { default as CardArtista } from "../../components/CardArtista";
import { default as Layout} from '../../components/Layout';
import { default as SubHeader} from '../../components/SubHeader';
import { default as SomosClient } from '../../utils/client';

var mock_qtdArtistas = 0;

jest.mock('../../components/CardArtista', () => (props) => {
    mock_qtdArtistas += 1;

    return (
        <div className={"testeArtista"}>
            {props.artista.name}
        </div>
    );
});

jest.mock('../../components/Layout', () => (props) => {
    
    return (
        <div>
            <div>Cabeçalho</div>
            {props.children}
        </div>
    );
});

jest.mock('../../components/SubHeader', () => (props) => {
    
    return (
        <div>
            <div>Breadcrumb</div>
        </div>
    );
});

const mock_artistasSpotifyResponse = {
    artists: {
        items: [
            {
                name: 'Raphael',
                id: 'art001',
                images: [
                    {url: 'https://teste.com/image01.jpg', id: '001'},
                    {url: 'https://teste.com/image02.jpg', id: '002'}
                ]
            },
            {
                name: 'Jaguaribe',
                id: 'art002',
                images: [
                    {url: 'https://teste.com/image03.jpg', id: '003'},
                    {url: 'https://teste.com/image04.jpg', id: '004'}
                ]
            },
            {
                name: 'Colonese',
                id: 'art003',
                images: [
                    {url: 'https://teste.com/image05.jpg', id: '005'},
                    {url: 'https://teste.com/image06.jpg', id: '006'}
                ]
            }
        ]
    }
};

jest.mock('../../utils/client', () => {
    return function () {
        return {
            getArtists: (nomeArtista) => {
                return mock_artistasSpotifyResponse;
            }
        };
    };
});

describe('Deve listar', () =>{

    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('3 artistas após executar pesquisa', async () =>  {

        // Test first render and componentDidMount
        ReactTestUtils.act(() => {
            //Adiciona no container uma instância do Componente Busca
            ReactDOM.render(<Busca />, container);
        });

        expect(container.textContent).toBe('CabeçalhoBreadcrumb');

        const inputSearch = container.querySelector('#searchTextId');
        const buttomSearch = container.querySelector('#searchButtomId');

        /**
         * Informo no Input da pesquisa o texto 'qual'
         * vide:
         * https://pt-br.reactjs.org/docs/test-utils.html#simulate
         */
        inputSearch.value = 'qual';
        ReactTestUtils.Simulate.change(inputSearch);

        /**
         * Uso o await/async para que o teste aguarde a resposta asincrona
         * acionada pelo click do botão terminar e atualizar o DOM
         * Vide:
         * https://reactjs.org/docs/testing-recipes.html#act
         */
        await ReactTestUtils.act( async() => {
            buttomSearch.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        
        //Verifico que a chamada ao mock de card de artista foi chaamdo 3 vezes
        expect(mock_qtdArtistas).toBe(3);

        //Verifico que o elemento mock do card de artista foi plotado 3 vezes
        const elementCardArtistas = container.querySelectorAll('.testeArtista');
        expect(elementCardArtistas.length).toBe(3);

        expect(elementCardArtistas[0].textContent).toBe(mock_artistasSpotifyResponse.artists.items[0].name);
        expect(elementCardArtistas[1].textContent).toBe(mock_artistasSpotifyResponse.artists.items[1].name);
        expect(elementCardArtistas[2].textContent).toBe(mock_artistasSpotifyResponse.artists.items[2].name);

    })

});