import React from 'react'
import twitter from '../../assets/icons/twitter.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import tiktok from '../../assets/icons/TikTok.svg'
import telegram from '../../assets/icons/telegram.svg'
import envelope from '../../assets/icons/envelope.svg'
import logo from '../../assets/images/Logo.svg'
import { useTranslation } from 'react-i18next'

const listSocial = [
  {
    id: 1,
    image: twitter,
    link: 'https://twitter.com/Therivius',
    target: '_blank',
  },
  {
    id: 2,
    image: telegram,
    link: 'https://t.me/Therivius',
    target: '_blank',
  },
  {
    id: 3,
    image: instagram,
    link: 'https://www.instagram.com/riviusnetwork/',
    target: '_blank',
  },
  {
    id: 4,
    image: facebook,
    link: 'https://www.facebook.com/Therivius',
    target: '_blank',
  },
  {
    id: 5,
    image: tiktok,
    link: 'https://www.tiktok.com/@riviusnetwork',
    target: '_blank',
  },
  {
    id: 6,
    image: linkedin,
    link: '#',
    target: '',
  },
  {
    id: 7,
    image: envelope,
    link: '#',
    target: '',
  },
]

const renderListSocial = () => {
  return listSocial.map((item) => {
    return (
      <a
        href={item.link}
        key={item.id}
        className="footer-item"
        target={item.target}
      >
        <img src={item.image} alt="social" />
      </a>
    )
  })
}

const listFooter = [
  {
    id: 1,
    name: 'Privacy Policy',
    link: '#',
  },
  {
    id: 2,
    name: 'Terms of Use',
    link: '#',
  },
  {
    id: 3,
    name: 'Open Source Notices',
    link: '#',
  },
  {
    id: 4,
    name: 'Service Status',
    link: '#',
  },
  {
    id: 5,
    name: 'Feedback',
    link: '#',
  },
]

export default function Footer() {
  const { t } = useTranslation()
  const renderListFooter = () => {
    return listFooter.map((item) => {
      return (
        <a href={item.link} key={item.id} className="footer-item">
          {t(item.name)}
        </a>
      )
    })
  }
  return (
    <div className="footer">
      <div className="footer-social">{renderListSocial()}</div>
      <div className="footer-container">
        <div className="footer-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-link">{renderListFooter()}</div>
        <p>© 2022 Rivius. All rights reserved</p>
      </div>
    </div>
  )
}
