import React, { useState, useEffect, memo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import icon from '../../assets/icons/icon-project.svg'
import check from '../../assets/icons/check.svg'
import project1 from '../../assets/images/project1.png'
import project2 from '../../assets/images/project2.png'
import Footer from '../../components/Footer'
import Option from '../../components/Option'
import Partner from '../../components/Partner'
import Subscribe from '../../components/Subscribe'
import { useTranslation } from 'react-i18next'

const listProjects = [
  {
    id: 1,
    title: 'VietPay',
    image1: project1,
    image2: project2,
    content:
      'Multi chain wallet allows storing cryptocurrencies in Rivius Network',
    content1: 'Safety - High security',
    content2: 'Support thousands of cryptocurrencies',
    content3: 'Use cross-platform website/mobile',
  },
  {
    id: 2,
    title: 'VietBox',
    image1: project1,
    image2: project2,
    content:
      'Real-time tracking and data transparency application in transport and logistics management',
    content1: 'Real-time tracking',
    content2: 'Smart contracts and payment automation',
    content3: 'Performance monitoring',
  },
  {
    id: 3,
    title: 'TRASA',
    image1: project1,
    image2: project2,
    content: 'Distributed database system and product traceability',
    content1: 'Trustworthy - Continuous advancement',
    content2: 'Unify data on product origin',
    content3: 'Real-time tracking',
  },
  {
    id: 4,
    title: 'Frowth',
    image1: project1,
    image2: project2,
    content:
      'Blockchain application in Fintech to develop the financial system',
    content1: 'Speed up transactions',
    content2: 'Smart contract development',
    content3: 'Diversity of financial products and services',
  },
  {
    id: 5,
    title: 'Studemy',
    image1: project1,
    image2: project2,
    content:
      'Application to validate diplomas, certifications, training certificates, and scientific curriculum vitae',
    content1: 'Ensure openness and transparency',
    content2: 'Compare and verify information quickly',
    content3: 'Using unique web addresses',
  },
  {
    id: 6,
    title: 'Exam',
    image1: project1,
    image2: project2,
    content: 'Blockchain application in the management of exams',
    content1: 'Mechanism of data protection',
    content2: 'Convenience and management costs-saving',
    content3: 'Disclosure and transparency of stakeholder data',
  },
  {
    id: 7,
    title: 'Adoctic',
    image1: project1,
    image2: project2,
    content:
      'Handbook of technology for storing medical records and genetic data',
    content1: 'Profile information stored is immutable',
    content2:
      'Accurate data connection for 3rd parties like insurance, pharmacy, research',
    content3: 'Al in disease diagnosis',
  },
  {
    id: 8,
    title: 'Tasker',
    image1: project1,
    image2: project2,
    content: 'Production management software. Easily tracking the process',
    content1: 'Traceability - confirm the origin of input materials',
    content2: 'Al calculation to track the quantity of goods',
    content3: 'Save cost and time of maintenance of machinery system',
  },
  {
    id: 9,
    title: 'Kingstats',
    image1: project1,
    image2: project2,
    content:
      'Accounting and Audit application. Time-saving on checking and comparing data',
    content1: 'Top security to resist data change',
    content2: 'Centralized and constantly updated information',
    content3: 'Al in analyze and identify patterns',
  },
  {
    id: 10,
    title: 'Alvalink',
    image1: project1,
    image2: project2,
    content: 'Blockchain application in Education Management',
    content1: 'Storing big data',
    content2: 'Secure the digital certificate',
    content3: 'The potential for curriculum transformation',
  },
  {
    id: 11,
    title: 'Walletia',
    image1: project1,
    image2: project2,
    content: 'Blockchain application in Remittance & Money Transfer Services',
    content1: 'Fast cross-border payments',
    content2: 'P2P payment, reduce transaction costs',
    content3: 'Safety - Security - Transparency',
  },
  {
    id: 12,
    title: 'Nitrox',
    image1: project1,
    image2: project2,
    content:
      'Derivatives exchange. Diversify investment portfolio, financial leverage',
    content1: 'Proof of reserve (POR)',
    content2: 'Trade with thousands of cryptocurrencies in a few seconds',
    content3: 'Two-Factor Authentication (2FA)',
  },
]

const Project = () => {
  const { t } = useTranslation()
  const [option, setOption] = useState()
  const [searchParams, setSearchParams] = useSearchParams()

  const renderListProjects = () => {
    return listProjects.map((item) => {
      return (
        <div key={item.id} id={item.id} className="project-container">
          <div className="project-item">
            <div className="project-item-image">
              <img src={item.image2} alt="project" />
            </div>
            <div className="project-item-content">
              <h6>{item.title}</h6>
              <p>{t(item.content)}</p>
              <div className="list-content">
                <div className="content">
                  <img src={check} alt="check icon" />
                  <p>{t(item.content1)}</p>
                </div>
                <div className="content">
                  <img src={check} alt="check icon" />
                  <p>{t(item.content2)}</p>
                </div>
                <div className="content">
                  <img src={check} alt="check icon" />
                  <p>{t(item.content3)}</p>
                </div>
              </div>
              <div className="button">
                <button>{t('Explore more')}</button>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  useEffect(() => {
    let id = searchParams.get('id')
    if (id) {
      window.location.href = '#' + id
    }
  }, [searchParams])

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      let position1 = document.getElementById('1')?.offsetTop
      let height = document.getElementById('1')?.offsetHeight
      let position2 = document.getElementById('2')?.offsetTop
      let position3 = document.getElementById('3')?.offsetTop
      let position4 = document.getElementById('4')?.offsetTop
      let position5 = document.getElementById('5')?.offsetTop
      let position6 = document.getElementById('6')?.offsetTop
      let position7 = document.getElementById('7')?.offsetTop
      let position8 = document.getElementById('8')?.offsetTop
      let position9 = document.getElementById('9')?.offsetTop
      let position10 = document.getElementById('10')?.offsetTop
      if (window.scrollY < position1 + height / 2) {
        setOption(1)
      } else if (window.scrollY < position2 + height / 2) {
        setOption(2)
      } else if (window.scrollY < position3 + height / 2) {
        setOption(3)
      } else if (window.scrollY < position4 + height / 2) {
        setOption(4)
      } else if (window.scrollY < position5 + height / 2) {
        setOption(5)
      } else if (window.scrollY < position6 + height / 2) {
        setOption(6)
      } else if (window.scrollY < position7 + height / 2) {
        setOption(7)
      } else if (window.scrollY < position8 + height / 2) {
        setOption(8)
      } else if (window.scrollY < position9 + height / 2) {
        setOption(9)
      } else if (window.scrollY < position10 + height / 2) {
        setOption(10)
      }
    })
    return () =>
      window.removeEventListener('scroll', () => {
        console.log('remove event')
      })
  })

  return (
    <div className="project">
      <div className="project-title">
        <div className="container">
          <h1 data-aos="fade-right">
            {t('Project')} <img src={icon} alt="icon" />
          </h1>
        </div>
      </div>
      <div className="container">
        <Option />
      </div>
      <div className="project-slide">{renderListProjects()}</div>
      <div className="container">
        <Partner />
        <Subscribe />
        <Footer />
      </div>
      <div className="slide">
        <div className="line"></div>
        {listProjects.map((res, index) => (
          <a
            className={`${option === res.id ? 'active' : ''}`}
            href={`#${res.id}`}
            key={index}
            onClick={() => {
              setOption(res.id)
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default memo(Project)
