import styled from 'styled-components'

interface ThumbnailProps {
  size: number
  src: string
  round: boolean
}

export const Thumbnail = styled.div<ThumbnailProps>`
  border-radius: ${(props) => props.round ? '50%' : 'none'};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  min-width: ${(props) => props.size}px;
  background-size: 100%;
  background-position: 50%;
  background-image: url(${(props) => props.src});
`
