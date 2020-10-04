import React from 'react'
import Icon from '../Icons'

export default function NavButton({property}) {
    return (
        <button className={property === 'Back'? 'navButton no-outline':'navButton mediaNone no-outline'}>
            <Icon name={property} />
        </button>
    )
}
