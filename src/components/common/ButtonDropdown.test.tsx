import React from 'react'
import { act, render, screen } from '@testing-library/react'
import ButtonDropdown from './ButtonDropdown'

describe('(Component) ButtonDropdown', () => {
  it('should render', () => {
    render(<ButtonDropdown />)
  })
  it('should render button initially with defaultText', () => {
    render(<ButtonDropdown defaultText="Test" />)
    const expandButton = screen.getByRole('button', {
      name: 'Test',
    })
    expect(expandButton).toBeInTheDocument()
  })
  it('should change the onChange value when selecting an option', () => {
    const mockOnChange = jest.fn()
    render(
      <ButtonDropdown onChange={mockOnChange} options={['item1', 'item2']} />
    )
    const option = screen.getByText('item1')
    option.click()
    expect(mockOnChange).toBeCalledWith('item1')
  })
  it('should change the button text on changing a specific value', () => {
    const options = ['item1', 'item2']
    render(<ButtonDropdown options={options} value={options[0]} />)
    const expandButton = screen.getByRole('button', { name: 'item1' })
    expect(expandButton).toBeInTheDocument()
  })
  it('should change the state for dropdown expanded, on button click', () => {
    render(<ButtonDropdown defaultText="Test" />)

    const expandButton = screen.getByRole('button', { name: 'Test' })
    act(() => expandButton.click())

    expect(expandButton).toHaveAttribute('aria-expanded', 'true')
  })
  it('should change the className to "dropdown open" if dropdown is expanded', () => {
    render(<ButtonDropdown defaultText="Test" />)

    const expandButton = screen.getByRole('button', { name: 'Test' })
    act(() => expandButton.click())

    expect(screen.getByTestId('button-dropdown')).toHaveClass('dropdown open')
  })
  it('should change the className to "dropdown" if dropdown is collapsed', () => {
    render(<ButtonDropdown defaultText="Test" />)

    const expandButton = screen.getByRole('button', { name: 'Test' })
    act(() => {
      expandButton.click()
      expandButton.click()
    })

    expect(screen.getByTestId('button-dropdown')).not.toHaveClass('open')
  })
})
