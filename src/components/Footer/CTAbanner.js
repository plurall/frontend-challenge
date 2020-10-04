import React from 'react'
import PromptButton from '../Featured/PromptButton'

export default function CTAbanner() {
    return (
        <div className='CTA-banner'>
            <div className="cta-content">
                <h2 style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '16px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                }}>AMOSTRA DO SPOTIFY</h2>
                <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textTransform: 'none'
                }}>Inscreva-se para curtir músicas ilimitada e podcast só com alguns anúncios. Não pricisa de cartão de crédito.</h3>
            </div>
            <PromptButton to='https://spotify.com/signup' name='INSCREVA-SE GRÁTIS ' styleName='CTA'/>
        </div>
    )
}
