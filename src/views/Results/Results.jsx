import PropTypes from 'prop-types'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import defaultAvatar from '../../assets/default_avatar.png'
import Icon from '../../components/Icons'

export default class Results extends Component {
  static propTypes = {
    artists: PropTypes.array,
  }

  render() {
    const {
      props: { artists },
    } = this

    return (
      <>
        <div className='pcWrapper'>
          {artists &&
            artists.map(artist => (
              <Link to={`artista/${artist.id}`} key={artist.id} style={{textDecoration:'none', color:'var(--main-text)', zIndex:'3'}}>
                  <div className="CardDisplay">
                    <div className="RowGrid">
                      <div className="photo">
                        {artist.images.length > 0 ? (
                          <img src={artist.images[0].url} alt={artist.name} />
                          ) : (
                            <img src={defaultAvatar} alt={artist.name} />
                            )}
                      </div>
                        <div className="CardInfo"><p style={titleStyle}>{artist.name}</p></div>
                        <button className="smallButton no-outline" title="Play">
                            <Icon name="Play" height='17' width='17'/>
                        </button>
                    </div>
                 </div>
              </Link>
            ))}
        </div>
      </>
    )
  }
}

const titleStyle = {
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: 'normal',
  textTransform: 'none',
  textOverflow: 'ellipsis',
  overflow:'hidden',
  color:'white',
  whiteSpace: 'nowrap'
}
