import React from 'react'
import arrow from '../../../assets/icons/arrow-up.svg'
import arr from '../../../assets/icons/arrow.svg'
import text from '../../../assets/icons/text.svg'
import banner from '../../../assets/images/banner.png'
import { useSizeObersver } from '../../../Hooks/SizeObserver'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'

export default function Banner() {
  const { innerWidth } = useSizeObersver()
  const { t } = useTranslation()

  const listBanner = [
    {
      id: 1,
      image: banner,
    },
    {
      id: 2,
      image: banner,
    },
    {
      id: 3,
      image: banner,
    },
  ]

  const renderListBanner = () => {
    return listBanner.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <div className="banner__content">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              {t('The Most')}
              <br />
              {t('Easy-to-use')}
              <br />
              {t('Blockchain Network')}
            </h1>
            <p data-aos="fade-right" data-aos-duration="1500">
              {t(
                "Blockchain Technology for Vietnam's digital economy. Transforming and expanding business in Rivius Network",
              )}
            </p>
            <div className="banner__content-button">
              <button>{t('Explore more')}</button>
              <button>
                Whitepaper <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
          {innerWidth > 800 ? (
            <div className="banner__image">
              <img src={item.image} alt="banner" />
              <div className="position">
                <div className="cricle">
                  <div className="arrow">
                    <img src={arr} alt="arrow" />
                  </div>
                  <div className="text">
                    <img src={text} alt="text" />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </SwiperSlide>
      )
    })
  }

  return (
    <div className="banner">
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {renderListBanner()}
      </Swiper>
    </div>
  )
}
