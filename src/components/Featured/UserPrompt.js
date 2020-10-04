import React from 'react'
import PromptButton from './PromptButton'

export default function UserPrompt() {
    return (
        <div className='UserPrompt'>
            <PromptButton to='https://spotify.com/signup' name='INSCREVE-SE' styleName='dark'/>
            <PromptButton to='https://spotify.com/login' name='ENTRAR' styleName='light'/>
        </div>
    )
}
