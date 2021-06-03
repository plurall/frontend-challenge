import animation from '../../utils/lottie.json'
import Lottie from 'lottie-react-web'
import React from 'react'
import { Container } from './styles'

const Load = () => (
  <Container>
    <Lottie
      options={{ animationData: animation, autoplay: true, loop: true }}
    />
  </Container>
)

export default Load
