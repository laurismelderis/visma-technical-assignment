import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders app', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  render(<App />)
})
