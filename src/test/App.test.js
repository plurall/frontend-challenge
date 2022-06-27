import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import renderWithRouter from './renderWithRouter'

describe('Testando componente App', () => {
    it('Verifica se contém um heading com a palavra spotify', () => {
        renderWithRouter(<App />)
        const spotify = screen.getByRole('heading', { name: /spotify/i })
        expect(spotify).toBeInTheDocument()
    })
    it('Verifica se contém um logo', () => {
        renderWithRouter(<App />)
        const logo = screen.getByRole('img', { name: /spotify-logo/i })
        expect(logo).toBeInTheDocument()
    })
    it('Verificar se renderiza a página home', () => {
        renderWithRouter(<App />)
        const home = screen.getByRole('heading', { name: /home/i, level: 1 })
        expect(home).toBeInTheDocument()
    })

    it('Verifica se existe um botão de "Search" na página home', () => {
        renderWithRouter(<App />)
        const button = screen.getByRole('button', { name: /buscar/i })
        expect(button).toBeInTheDocument()
    })
})

