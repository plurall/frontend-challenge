import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import renderWithRouter from './renderWithRouter'

describe('Tests', () => {
    it('Verificar se renderiza a página home', () => {
        renderWithRouter(<App />)
        const um = screen.getByRole('heading', { level: 2 })
        expect(um).toBeInTheDocument() // fazer assim para os outros
    })

    it('Verifica se existe um botão de "Search" na página home', () => {
        renderWithRouter(<App />)
        screen.getByRole('button', { name: /search/i })
    })

    it('Verificar se existem três links na página', () => {
        renderWithRouter(<App />)
        screen.getByRole('link', { name: /início/i })
        screen.getByRole('link', { name: /Buscar/i })
        screen.getByRole('link', { name: /artista selecionado/i })
    })

    it('Testar se ao clicar no botão search, redireciona para a página buscar', () => {
        renderWithRouter(<App />)
        const searchButton = screen.getByRole('button', { name: /search/i })
        userEvent.click(searchButton)
        const searchPag = screen.getByRole('textbox', { name: /buscar/i })
        expect(searchPag).toBeInTheDocument
    })
})
