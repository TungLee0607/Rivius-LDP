import React from 'react'
import plant from '../../../assets/icons/plant.svg'
import price from '../../../assets/icons/price.svg'
import flower from '../../../assets/icons/flower.svg'
import { useTranslation } from 'react-i18next'

const listOption = [
  {
    image: plant,
    title: '1. Transaction speed',
    content: 'Improve system performance and speed up transactions by 80%.',
  },
  {
    image: price,
    title: '2. User-friendly',
    content:
      'Eliminate intermediaries, reduce costs, and operate decentralize.',
  },
  {
    image: flower,
    title: '3. Absolute security',
    content:
      'The private server system specializes in storing big data. Optimize cyber security.',
  },
]

export default function Introduction() {
  const { t } = useTranslation()

  return (
    <div className="introduction" data-aos="zoom-in" data-aos-duration="2000">
      <h2>{t('A Superior Blockchain Solution')}</h2>
      <p>
        {t(
          'The pioneer in building Blockchain infrastructure for Vietnamese developers. Rivius Network - Multichain platform for Web3 applications',
        )}
      </p>
      <div className="introduction__list">
        {listOption.map((item, index) => {
          return (
            <div className="introduction__item" key={index}>
              <div className="introduction__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h6>{t(item.title)}</h6>
              <p>{t(item.content)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
