# Somos Front-end Challenge

Exemplos de projetos de front-end challange

- https://github.com/felipefialho/frontend-challenges

Objetivo: Implementar busca e página d detalhe de um artista. A busca deve ser feita na rota `http://boilerplate.local.plurall.net:3000/busca` e a página de detalhe do artista em `http://boilerplate.local.plurall.net:3000/artista/:id`

Cumprindo os checkpoints abaixo, você poderá enviar o PR para que possamos analizar seu código.

- Usar o que for possivel da https://elo.ui.e.plurall.net/ (Já esta instalado, `plurall-ui`)
- Modificar a integração OAuth para a do spotify - Você pode criar uma aplicação aqui https://developer.spotify.com/dashboard/applications
- Implementar um Client que fara toda a conexão com API do Spotify, na view, queremos que fique apenas, já temos a base aqui `src/utils/client.js`

```
class Home extends React.Component {
  ...jsx
  client = new SomosClient()

  componentDidMount() {
    const artist = client.getArtist(id)
    this.setState({ artist })
  }
  ...
}
```

- Implementar um botão na home que use o link do react para levar a página de busca
- Implementar página de busca, contendo um input e quando tiver mais de 4 caracteres, aparecer o resultado que api esta entrangando, mostrando nome do artista e foto, quando eu clicar em algum, deve me levar até página de detalhe do artista
- Implementar página de detalhe do artista, nessa página, deve ser mostrado as seguintes informações do artista, `nome, popularidade, foto, generos` e logo abaixo das informações do artista, queremos que liste 10 albuns, mostrando `imagem, nome do album e e quando foi lançado` OBS: a data de lancamento deve ser `DD/MM/AAAA` - Se possivel não queremos lib externa para formatar a data :)

- alert: caso você não tenha conhecimento de OAuth, lista artistas desse endpoint, ignore o passo
