import PropTypes from 'prop-types'
import React from 'react'
import ProfileArtist from '../../components/ProfileArtist'

const ProfileArtistScreen = ({ children }) => {
  return (
    <>
      <div>
        <ProfileArtist />
        {children}
      </div>
    </>
  )
}

export default ProfileArtistScreen

ProfileArtistScreen.propTypes = {
  children: PropTypes.node,
}

ProfileArtistScreen.defaultProps = {
  children: '',
}
