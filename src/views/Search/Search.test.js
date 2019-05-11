import React from 'react'
import TestRenderer from 'react-test-renderer'
import Search from './Search'

let props
let testRenderer
let instance

jest.mock('../../utils/client.js', () => (
  jest.fn().mockImplementation(() => (
    { getArtists: jest.fn(() => [{ name: 'test' }]) }
  ))
))

describe('SearchBox', () => {
  beforeEach(() => {
    props = {
      history: { push: jest.fn() },
    }

    testRenderer = TestRenderer.create(
      <Search {...props} />,
    )
    instance = testRenderer.getInstance()
  })

  it('not call client.getArtists when getArtists to be call with param length less than five', () => {
    // given
    const artist = 'Metallica'
    // when
    instance.getArtists(artist)
    // then
    expect(instance.client.getArtists).toBeCalledWith(artist)
  })

  it('should change artist state when getArtists to be call with param length less than five', async () => {
    // given
    const artist = 'Metallica'
    // when
    await instance.getArtists(artist)
    // then
    expect(instance.state.artists).toEqual([{ name: 'test' }])
  })

  it('should dispatch client.getArtists when getArtists is call', () => {
    // given
    const artist = 'Meta'
    // when
    instance.getArtists(artist)
    // then
    expect(instance.client.getArtists).not.toBeCalled()
  })

  it('should change artist state when getArtists is call', () => {
    // given
    const artist = 'Meta'
    // when
    instance.getArtists(artist)
    // then
    expect(instance.state.artists).toEqual([])
  })

  it('should dispatch history push when showArtist is called', () => {
    // given
    const id = 1
    // when
    instance.showArtist(id)
    // then
    expect(props.history.push).toBeCalledWith(`/artista/${id}`)
  })
})
