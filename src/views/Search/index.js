import React, { Component, Fragment } from 'react';
import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import { SearchBox } from '../../utils/@plurall/elo'
import defaultImage from '../../assets/defaultImage.jpg'

import styles from '../Home/Home.module.css'

class SearchPage extends Component {
    render() {
        return (
            <Fragment>
                <SubHeader breadcrumb={[{ text: 'Busca' }]} heading="Procure por Artistas"/>
                <div className={styles.wrapper}>
                    <SearchBox onChange={this.updateArtistsState} onClick={this.handleClick} items={this.drawSearchValues(this.state.searchArray)}></SearchBox>
                </div>
            </Fragment>
        );
    }

    state = {
        searchArray: []
    }

    handleClick = (e) => window.location.href = `./artista/${e.id}`

    updateArtistsState = (input) => {
        if(input.length >= 4){
            var client = new SomosClient()
            var artistsObj = []
    
            client.getArtists(input).then(res => {
                var items = res.data.artists.items
    
                for(var i in items){  
                    var { name, id, images } = items[i]
                    var portrait = images[0] ? images[0].url : defaultImage

                    artistsObj.push({
                        name: name,
                        id: id,
                        image: portrait,
                        element: (
                            <div className="d-flex a-ver">
                                <div><img className="search-img mar-r-12" src={portrait} alt=""/></div>
                                <span>{name}</span>
                            </div>
                        )
                    })
                }
                this.setState({...this.state, searchArray: artistsObj})
            })
        }
    }

    drawSearchValues = (array) => {
        var list = []

        for(var val in array){
            list.push({'value': array[val].name, 'element': array[val].element,'id': array[val].id})
        }

        return list
    }
}

export default SearchPage;