import React from 'react'

export default function Conditional({ condition, truthy, lie }) {
  return <React.Fragment>{condition ? truthy : lie}</React.Fragment>
}
