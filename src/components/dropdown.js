import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#9e9e9e',
      minHeight: '35px',
      height: '35px',
    }),

    menuList : () => ({
        fontSize : 15
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '35px',
      padding: '0 6px',
      fontSize: 15,
      align : "left"
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '35px',
    }),
  };

const DropDown = () => (
  <Select options={options} styles={customStyles} />
)

export default DropDown;