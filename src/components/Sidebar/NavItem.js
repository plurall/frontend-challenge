import React from 'react'
import Icon from '../Icons'

const NavItem = ({ name, label }) => {
  return (
    <li>
      <button className="create-button no-outline">
        <Icon name={name} />
        <span style={{ margin: 8 }}>{label}</span>
      </button>
    </li>
  )
}

export default NavItem
