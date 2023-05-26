import React from 'react'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddLocation from './AddLocation'

describe('(Component) AddLocation', () => {
  it('should render', () => {
    render(<AddLocation />)
  })
  it('should render the "Add interview location" button', () => {
    render(<AddLocation />)
    const expandButton = screen.getByRole('button', {
      name: 'Add interview location',
    })
    expect(expandButton).toBeInTheDocument()
  })
  it('should render ButtonDropdown on expand', () => {
    render(<AddLocation />)
    const expandButton = screen.getByRole('button', {
      name: 'Add interview location',
    })
    act(() => expandButton.click())
    const buttonDropdown = screen.getByTestId('button-dropdown')
    expect(buttonDropdown).toBeInTheDocument()
  })
  it('should render TextInputField on expand', () => {
    render(<AddLocation />)
    const expandButton = screen.getByRole('button', {
      name: 'Add interview location',
    })
    act(() => expandButton.click())
    const textInputField = screen.getByTestId('text-input-field')
    expect(textInputField).toBeInTheDocument()
  })
  it('should render save button on expand', () => {
    render(<AddLocation />)
    const expandButton = screen.getByRole('button', {
      name: 'Add interview location',
    })
    act(() => expandButton.click())
    const saveButton = screen.getByRole('button', { name: 'Save' })
    expect(saveButton).toBeInTheDocument()
  })
  it('should show alert pop up on button "Save" click', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation()
    render(<AddLocation />)

    const expandButton = screen.getByRole('button', {
      name: 'Add interview location',
    })
    act(() => expandButton.click())

    const saveButton = screen.getByRole('button', { name: 'Save' })
    act(() => saveButton.click())

    expect(alertMock).toHaveBeenCalledTimes(1)
  })
  it('should be empty the entered text in ButtonDropdown on collapse', () => {
    render(<AddLocation />)

    const expandButton = screen.getByRole('button', {
      name: 'Add interview location',
    })
    act(() => expandButton.click())
    const buttonDropdown = screen.getByTestId('button-dropdown')
    const option = within(buttonDropdown).getByText('Sporta iela 11, Rīga')

    act(() => option.click())

    act(() => {
      expandButton.click()
      expandButton.click()
    })

    const selectButton = within(buttonDropdown).getByRole('button', {
      name: 'Select address',
    })

    expect(selectButton).toBeInTheDocument()
  })
  it('should be empty the entered text in TextInputField on collapse', () => {
    render(<AddLocation />)

    const expandButton = screen.getByRole('button', {
      name: 'Add interview location',
    })
    act(() => expandButton.click())
    const textInputFieldWrapper = screen.getByTestId('text-input-field')
    const inputField = within(textInputFieldWrapper).getByRole('textbox')

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => userEvent.type(inputField, 'Test'))

    act(() => {
      expandButton.click()
      expandButton.click()
    })

    expect(inputField).toHaveAttribute('value', '')
  })
})
