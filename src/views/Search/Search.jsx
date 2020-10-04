import React, {Component} from 'react'

import { SomosClient } from 'utils'

import Results from '../Results/Results'
import Sidebar from '../../components/Sidebar/Sidebar'
import Icon from '../../components/Icons'
import Logo from '../../components/Sidebar/Logo.js'
import NavList from '../../components/Sidebar/NavList.js'
import NavItem from '../../components/Sidebar/NavItem.js'
import PlayLists from '../../components/Sidebar/PlayLists.js'
import OtherPlaylist from '../../components/Sidebar/OtherPlaylist.js'
import FeaturedPlaylist from '../../components/Sidebar/FeaturedPlaylist.js'
import InstallCTA from '../../components/Sidebar/InstallCTA.js'
import Footer from '../../components/Footer/Footer.js'
import CTAbanner from  '../../components/Footer/CTAbanner.js'
import HistoryNav from '../../components/Featured/HistoryNav'
import Headerbar from '../../components/Featured/Headerbar.js'
import UserPrompt from '../../components/Featured/UserPrompt.js'

export default class Search extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    search: '',
  }

  client = new SomosClient()

  async handleChange(e) {
    const search = e.target.value
    this.setState({ search })
    if (search.length >= 4) {
      const artists = await this.client.getArtists(search)
      this.setState({ artists: artists.items })
    } else {
      this.setState({ artists: '' })
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <Sidebar>
            <Logo to="/"/>
            <NavList>
                <NavItem name='Home' label='Início' />
                <NavItem name='Search' label='Buscar' />
                <NavItem name='Library' label='Sua Biblioteca' />
            </NavList>
            <PlayLists
              top={<FeaturedPlaylist/>}
              bottom={<OtherPlaylist/>}
            />
            <InstallCTA />
          </Sidebar>
          <div className='featured'>
           <Headerbar>
            <HistoryNav />
              <div className="SearchContainer">
                <div className='SearchBar'>
                  <div style={iconStyle}>
                      <Icon name="N-Search" />
                  </div>
                  <input className= 'SearchInput no-outline'
                    type="text"
                    maxLength='80'
                    autoCorrect='off'
                    autoCapitalize='off'
                    spellCheck='false'
                    autoFocus={true}
                    value={this.state.search}
                    onChange={this.handleChange}
                    placeholder="Busque artistas, músicas ou podcasts"
                    />
                </div>
              </div>
              <UserPrompt />
            </Headerbar>
            <div>
            {this.state.artists && (
                <Results artists={this.state.artists} />
              )}
            </div>
          </div>
          <Footer>
              <CTAbanner />
          </Footer>
        </div>
      </>
    )
  }
}

const iconStyle = {
  position:'absolute',
  top: '0',
  bottom: '0',
  left: '12px',
  display: 'flex',
  alignItems: 'center',
  cursor:'text'
}
