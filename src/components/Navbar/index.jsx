import React, { useCallback, useState, useEffect } from 'react'
import logo from '../../assets/images/Logo.svg'
import menu from '../../assets/icons/menu.svg'
import xmark from '../../assets/icons/x.svg'
import useWindowSize from '../../Hooks/useWindowSize'
import { useSizeObersver } from '../../Hooks/SizeObserver'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setLanguage } from '../../redux/Slice/LanguageSlide'

const listNav = [
  {
    name: 'About Us',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/project',
  },
  {
    name: 'Community',
    link: '/community',
  },
]

export default function Navbar() {
  const { i18n } = useTranslation()
  const { language } = useSelector((state) => state?.language)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const height = useWindowSize()
  const { innerWidth } = useSizeObersver()
  const [isLanguage, setIsLanguage] = useState(localStorage.getItem('language'))

  const handleChangeLanguage = useCallback(
    (languageOfItem) => {
      dispatch(setLanguage(languageOfItem))
      setIsLanguage(languageOfItem)
    },
    [isLanguage],
  )

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  useEffect(() => {
    if (!localStorage.getItem('language'))
      return localStorage.setItem('language', 'en')
  }, [])

  const { t } = useTranslation()

  const renderListNav = (close) => {
    return listNav.map((item, index) => {
      return (
        <a
          href={item.link}
          key={index}
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={() => close()}
        >
          {t(item.name)}
        </a>
      )
    })
  }

  function Modal({ shown, close }) {
    return shown ? (
      <div
        className="modal-backdrop"
        onClick={() => {
          close()
        }}
      >
        <div
          className={shown ? 'modal-content open' : 'modal-content close'}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className="x-icon" onClick={close}>
            <img src={xmark} alt="x-icon" />
          </div>
          <div className="modal-content-link">{renderListNav(close)}</div>
        </div>
      </div>
    ) : null
  }

  return (
    <>
      <div className={height > 0 ? 'navbar active-nav' : 'navbar'}>
        <div className="container">
          <div className="navbar__container">
            {innerWidth < 768 ? (
              <div
                className="header__nav-icon"
                onClick={() => {
                  setOpen(!open)
                }}
              >
                <img src={menu} alt="menu-icon" />
              </div>
            ) : null}

            <a href="/" className="navbar__left">
              <img src={logo} alt="logo" />
            </a>
            <div className="navbar__right">
              {innerWidth > 768 ? (
                <div className="navbar__link">{renderListNav()}</div>
              ) : null}
              <div className="navbar__language">
                <div
                  value="vi"
                  className={isLanguage === 'en' ? 'active' : ''}
                  onClick={() => handleChangeLanguage('en')}
                >
                  EN
                </div>
                <div
                  value="en"
                  className={isLanguage === 'vi' ? 'active' : ''}
                  onClick={() => handleChangeLanguage('vi')}
                >
                  VN
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          shown={open}
          close={() => {
            setOpen(false)
          }}
        />
      </div>
      <Outlet />
    </>
  )
}
