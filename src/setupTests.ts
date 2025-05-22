/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom'
import 'jest-canvas-mock'
import { configure } from '@testing-library/react'

configure({ testIdAttribute: 'data-test-id' })

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
})
