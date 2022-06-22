import React from 'react'
import App from '../App'

const { render, screen } = require('@testing-library/react')

describe('Tests', () => {
    it('Verificar se aparece a página home', () => {
        render(<App />)
        const titleEl = screen.getByRole('heading', { name: /home/i })
        expect(titleEl).toBeInTheDocument()
    })
})
