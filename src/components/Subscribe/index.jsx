import React from 'react'
import sub from '../../assets/images/buc.png'
import icon from '../../assets/icons/1.svg'
import diamond from '../../assets/images/diamond.png'
import { useTranslation } from 'react-i18next'

export default function Subscribe() {
  const { t } = useTranslation()

  return (
    <div className="sub">
      <div className="sub-content">
        <h2>
          {t('Join community')} <img src={icon} alt="icon" />
        </h2>
        <p>
          {t(
            'With a broad vision in the decentralized economy, Rivius Network will help your business transform to adapt to the 4.0 era.',
          )}
        </p>
        <a href="/community">{t('Join now')}</a>
      </div>
      <div className="sub-image">
        <img src={sub} alt="imageB" />
        <div className="diamond">
          <img src={diamond} alt="diamond" />
        </div>
      </div>
    </div>
  )
}
