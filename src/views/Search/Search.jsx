import React, { useState } from 'react'
import useWindowDimensions from '../../hooks/useDindowDimensions'
//components
import Footer from '../../components/Footer/Footer'
import Logo from '../../images/Logo.png'
//utils
import { SomosClient } from 'utils'
//mui
import { Grid, InputAdornment, Typography, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { Pagination, Navigation } from 'swiper'

import './Search.css'

const Search = () => {
  const client = new SomosClient()
  const { width } = useWindowDimensions()

  const [artists, setArtists] = useState()
  const [search, setSearch] = useState('')

  const handleSearch = async e => {
    setSearch(e)
    if (e.length >= 4)
      await client.getArtists(e, Math.round(width / 300)).then(res => {
        setArtists(res)
      })
  }
  return (
    <>
      <Grid className="container">
        <Grid
          container
          justifyContent="center"
          alignItems=" center"
          alignSelf="center"
          mt={15}
          className="logo-container"
          data-testid="logoContainer"
        >
          <img
            data-testid="logoImg"
            src={Logo}
            alt="Spotifly Logo, green circle with three white birds flying"
            width={100}
          />
          <Typography className="spotify-text">Spotifly®</Typography>
        </Grid>
        <Grid
          container
          item
          className="input-container"
          justifyContent="center"
          mt={5}
          xs={12}
        >
          <TextField
            data-testid="inputSearch"
            className="search-box"
            fullWidth
            variant="filled"
            value={search}
            onChange={e => handleSearch(e.target.value)}
            InputProps={{
              autoFocus: true,
              disableUnderline: true,
              style: { fontSize: '20px', color: '#ffffff' },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white', marginTop: '-10px' }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          container
          className="artists-container"
          justifyContent="center"
          mt={8}
          sx={{ backgroundColor: search.length > 3 ? '#383838' : 'none' }}
        >
          <Swiper
            slidesPerView={Math.round(width / 300)}
            spaceBetween={18}
            slidesPerGroup={1}
            loop={true}
            pagination={{
              clickable: false,
            }}
            modules={[Pagination, Navigation]}
            className="artists-swiper"
          >
            {artists
              ? artists.map(e => {
                  return (
                    <SwiperSlide
                      slot={artists[0] ? 'container-start' : null}
                      onClick={() => {
                        window.location.href = `/artista/${e.id}`
                      }}
                      className="swiper-box"
                      key={e.id}
                      style={{
                        backgroundImage:
                          e.images && e.images.length > 0
                            ? `url(${e.images[e.images.length - 2].url})`
                            : null,
                        backgroundRepeat: 'no-repeat',
                        cursor: 'pointer',
                        backgroundSize: 'cover',
                      }}
                    >
                      <span className="inside-swiper">{e.name}</span>
                    </SwiperSlide>
                  )
                })
              : null}
          </Swiper>
        </Grid>
        <Footer />
      </Grid>
    </>
  )
}

export default Search
