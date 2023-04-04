import React from 'react'
import icon from '../../../assets/icons/icon-project.svg'
import project1 from '../../../assets/images/projects/project1.png'
import project2 from '../../../assets/images/projects/project2.png'
import project3 from '../../../assets/images/projects/project3.png'
import { useTranslation } from 'react-i18next'

const listProject = [
  {
    id: 1,
    title: 'VietPay',
    image: project1,
    content:
      'Secure asset storage wallet and application to experience Rivius Network',
  },
  {
    id: 2,
    title: 'VietBox',
    image: project2,
    content:
      'Real-time and data-connected applications in transport and logistics management',
  },
  {
    id: 3,
    title: 'TRASA',
    image: project3,
    content: 'Distributed database system and product traceability',
  },
  {
    id: 4,
    title: 'Frowth',
    image: project1,
    content:
      'Applying blockchain technology in Fintech to develop the financial system',
  },
  {
    id: 5,
    title: 'Studemy',
    image: project2,
    content:
      'Application to validate diplomas, certifications, training certificates and scientific background',
  },
  {
    id: 6,
    title: 'Exam',
    image: project3,
    content: 'Blockchain application in the management of exams',
  },
  {
    id: 7,
    title: 'Adoctic',
    image: project1,
    content:
      'Handbook of technology for storing medical records and genetic data',
  },
  {
    id: 8,
    title: 'Tasker',
    image: project2,
    content:
      'Production management software. Easily track each step in the process',
  },
  {
    id: 9,
    title: 'Kingstats',
    image: project3,
    content:
      'Accounting System - Auditing Rivius Blockchain application. Secure, look up, check data quickly',
  },
  {
    id: 10,
    title: 'Alvalink',
    image: project1,
    content: 'Educational training quality assessment and management system',
  },
  {
    id: 11,
    title: 'Walletia',
    image: project2,
    content:
      'Blockchain application supports domestic and international payment forms',
  },
  {
    id: 12,
    title: 'Nitrox',
    image: project3,
    content:
      'Derivatives exchange. Diversify investment portfolio, financial leverage',
  },
]

export default function Project() {
  const { t } = useTranslation()

  const renderListProject = () => {
    return listProject.map((item, index) => {
      return (
        <div className="project-home-item" key={`item: ${index}`}>
          <a
            className="project-home-item-image"
            href={'/project?id=' + item.id}
          >
            <img src={item.image} alt={item.title} />
          </a>
          <div className="project-home-item-content">
            <h6>{item.title}</h6>
            <p>{t(item.content)}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="project-home">
      <div className="project-home-title">
        <div className="title">
          <h2>{t('Projects')}</h2>
          <img src={icon} alt="icon" />
        </div>

        <p>
          {t(
            'Rivius Network allows developers to launch decentralized applications (Defi, Gamefi, NFT), and supply chains or any financial products. Explore Dapps',
          )}
        </p>
      </div>
      <div
        className="project-home-list"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {renderListProject()}
      </div>
    </div>
  )
}
