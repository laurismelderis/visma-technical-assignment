import React, { useState } from 'react'
import { Button, Icon } from '@vismaux/react-vud'
import './AddLocation.scss'
import ButtonDropdown from './common/ButtonDropdown'
import TextInputField from './common/TextInputField'

const options: Array<string> = [
  'Sporta iela 11, Rīga',
  'Maldugunu iela 2, Rīga',
  'Lindhagengatan 94, Stockholm',
]

const AddLocation = (): JSX.Element => {
  const [addLocationExpanded, setAddLocationExpanded] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<string | undefined>()
  const [addingAddress, setAddingAddress] = useState<string | undefined>()

  const handleAddingAddressChange = (
    value: string | React.ChangeEvent<HTMLInputElement>
  ): void => setAddingAddress(value.toString())

  const handleChange = (selectedOption: string): void => {
    setSelectedAddress(selectedOption)
  }

  const handleSaveClick = (): void => {
    // eslint-disable-next-line no-alert
    window.alert(`${selectedAddress}\n${addingAddress}`)
  }

  const handleAddLocationExpandedSwitch = (): void => {
    setSelectedAddress('')
    setAddingAddress('')
    setAddLocationExpanded((prev) => !prev)
  }

  return (
    <>
      <Button
        className={`p-0 ${addLocationExpanded ? 'btn-red' : ''}`}
        onClick={handleAddLocationExpandedSwitch}
      >
        <Icon
          name={`${addLocationExpanded ? 'remove-circle' : 'add-circle'}`}
          size="sm"
          className={`${addLocationExpanded ? 'vismaicon-red' : ''}`}
        />
        Add interview location
      </Button>
      {addLocationExpanded && (
        <div className="d-flex flex-column gap-12 with-align-self-start">
          <ButtonDropdown
            value={selectedAddress}
            defaultText="Select address"
            options={options}
            onChange={handleChange}
          />
          <TextInputField
            onChange={handleAddingAddressChange}
            placeholder="Add new address"
            value={addingAddress}
          />
          <Button onClick={handleSaveClick} buttonType="primary">
            Save
          </Button>
        </div>
      )}
    </>
  )
}

export default AddLocation
