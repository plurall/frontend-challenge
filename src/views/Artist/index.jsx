import { Layout } from 'components'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function Artist() {
  const { id } = useParams()

  console.log(id)
  return (
    <Layout>
      <Container>
        <p>gfg</p>
      </Container>
    </Layout>
  )
}

const Container = styled.div``
