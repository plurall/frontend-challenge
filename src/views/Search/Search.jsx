import React, {Fragment} from "react"
import { SomosClient } from "utils";


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: "",
      api: {},
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    e.target.value.length > 4 && this.findArtist()
  }

  findArtist = () => {
    const { artists } = this.state
    const params = {
      q: artists,
      type: 'artist',
      market: 'us',
    }

    SomosClient('search', params, res => {
      this.setState({
        api: res.data.artists
      })
    })
    console.log(params)
  }

  render(){
    const {value, artists, api} = this.state;

    console.log(this.state);

    return(
      <Fragment>
        <input
          type="text"
          placeholder="Nome do Artista"
          onChange={this.handleChange.bind(this)}
          name="artists"
          value={value}
        />
        <div style={{display: 'flex', flexDirection: 'center'}}>
          <ul>
          {api.items && api.items.map((todo, key) =><li key={key}>{todo.id}</li>)}
          </ul>
        </div>
      </Fragment>
    )
  }
}


export default Search;
