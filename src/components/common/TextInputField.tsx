import React from 'react'
import './TextInputField.scss'
import { Icon } from '@vismaux/react-vud'

export interface TextInputFieldProps {
  value?: string
  onChange?(text: string): void
}

const TextInputField = ({
  value,
  onChange,
}: TextInputFieldProps): JSX.Element => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    onChange && onChange(e.target.value)

  const handleInputClear = (): void => onChange && onChange('')

  return (
    <div className="text-input-field-wrapper">
      <input
        placeholder="Enter text"
        onChange={handleInputChange}
        value={value}
      />
      <button type="button" onClick={handleInputClear}>
        <Icon name="close" size="sm" className="vismaicon-black-xs" />
      </button>
    </div>
  )
}

TextInputField.defaultProps = {
  value: '',
  onChange: null,
}

export default TextInputField
