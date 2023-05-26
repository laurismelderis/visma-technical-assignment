/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState } from 'react'
import './ButtonDropdown.scss'

export interface ButtonDropdownProps {
  value?: string
  defaultText?: string
  options?: Array<string>
  onChange?(selectedOption: string): void
}

const ButtonDropdown = ({
  value,
  defaultText,
  options,
  onChange,
}: ButtonDropdownProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleDropdownClick = (): void => {
    setIsExpanded((prev) => !prev)
  }

  const handleOptionClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (onChange) {
      onChange(e.currentTarget.getAttribute('value') || '')
      setIsExpanded(false)
    }
  }

  return (
    <div
      data-testid="button-dropdown"
      className={`dropdown ${isExpanded ? 'open' : ''}`}
    >
      <button
        type="button"
        className="btn dropdown-toggle btn-default-dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={isExpanded}
        onClick={handleDropdownClick}
      >
        {value || defaultText}
      </button>
      <ul
        className="dropdown-menu"
        role="menu"
        aria-expanded={isExpanded}
        aria-hidden={!isExpanded}
      >
        {options?.map((option, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            value={option}
            onClick={handleOptionClick}
            style={{ cursor: 'pointer' }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}

ButtonDropdown.defaultProps = {
  value: '',
  defaultText: '',
  onChange: null,
  options: [],
}

export default ButtonDropdown
