import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextInputField from './TextInputField'

describe('(Component) TextInputField', () => {
  it('should render', () => {
    render(<TextInputField />)
  })
  it('should render placeholder', () => {
    render(<TextInputField placeholder="Test" />)
    const inputField = screen.getByRole('textbox')
    expect(inputField).toHaveAttribute('placeholder', 'Test')
  })
  it('should render value', () => {
    render(<TextInputField value="Test" />)
    const inputField = screen.getByRole('textbox')
    expect(inputField).toHaveAttribute('value', 'Test')
  })
  it('should change the value onChange event', () => {
    const onChangeMock = jest.fn()
    render(<TextInputField onChange={onChangeMock} />)
    const inputField = screen.getByRole('textbox')

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => userEvent.type(inputField, 'Test'))

    expect(onChangeMock).toBeCalledTimes(4)
  })
  it('should clear the value on handleInputClear', () => {
    const onChangeMock = jest.fn()

    render(<TextInputField value="Test" onChange={onChangeMock} />)
    const clearButton = screen.getByRole('button')
    act(() => clearButton.click())
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })
})
