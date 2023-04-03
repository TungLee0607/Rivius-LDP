import React, { useState } from "react";
import item1 from "../../../assets/images/teams/item1.png";
import item2 from "../../../assets/images/teams/item2.png";
import item3 from "../../../assets/images/teams/item3.png";
import item4 from "../../../assets/images/teams/item4.png";
import item5 from "../../../assets/images/teams/item5.png";
import item6 from "../../../assets/images/teams/item6.png";
import item7 from "../../../assets/images/teams/item7.png";
import item8 from "../../../assets/images/teams/item8.png";
import ModalTeam from "./ModalTeam";
import hover from "../../../assets/icons/hover.svg";
import { useTranslation } from "react-i18next";

const listTeam = [
  {
    id: 1,
    name: "Mr. Kiên Nguyễn",
    position: "President of the Institute",
    content:
      "Founding President of VBI Institute. He is also a founding member, playing an important role in Smart Solution System 4.0 | Smart Agriculture System 4.0 Joint Stock Company | President of the Institute Council of the Institute of Tropical Agriculture.",
    contentModal1:
      "Founding President of VBI Institute. He is also a founding member and plays an important role in Smart Solution System Corporation 4.0 | 4.0 Smart Agriculture System Joint Stock Company",
    contentModal2:
      "President of the Institute Council of the Institute of Tropical Agriculture. He has made admirable milestones and achievements throughout his career",
    contentModal3:
      "Notably, such as: Building a quality management system according to international standards ISO9000, ISO14000, SA8000, OHSAS 18000... for enterprises in Vietnam.",
    contentModal4:
      "Regarding his education, he received a master's degree in Business Administration from the International Faculty at Hanoi National University",
    image: item1,
  },
  {
    id: 2,
    name: "Mr. Kiệt Nguyễn",
    position: "Deputy Director Of Institute",
    content:
      "Master of International Business. Played an important role in the establishment and development of VBI.",
    contentModal1:
      "Master of International Business. Played an important role in the establishment and development of VBI.",
    contentModal2:
      "At the same time, he holds the position of Director of Cuu Long Import-Export Trading Investment Company Limited, as well as Head of the Economic Department of the Association for Research and Consulting on Policy and Law for Investment Activities in Vietnam",
    image: item2,
  },
  {
    id: 3,
    name: "Mr. Phong Trần",
    position: "Institute Co-Founder",
    content:
      "Member of the co-founder of VBI Institute. Hold a senior position related to management and operations",
    contentModal1:
      "Co-founder of a research institute. Currently, he still holds a senior position related to management activities",
    contentModal2: "CoDev Service Company Limited",
    contentModal3:
      "Shareholders of THE VERSE Technology Research and Development Co, Ltd",
    contentModal4:
      "Member of the Board of Directors of Smart Agriculture System Corporation 4.0",
    image: item3,
  },
  {
    id: 4,
    name: "Mr. Huy Trần",
    position: "Director of the Institute",
    content:
      "Doctor of Business Administration. Technical support and execution of key growth strategy for VBI.",
    contentModal1:
      "Doctor of Business Administration. Responsible for technical support and execution of key growth strategy for VBI. He is also the General Director of V.B.P.O Joint Stock Company representing the Asia-Pacific region for Apollos University (USA) and a member of the executive board of the Vietnam Blockchain Association",
    contentModal2:
      "Participating in the information communication technology (ICT) industry since 1997, he has acquired an admirable system of expertise in many areas of ICT, including ICT processes, management ICT project, ICT QA/QC project",
    contentModal3:
      "He is also the creator of the AUTOBOT process self-assimilation system, the FO Tracing solution, F1 Covid-19",
    image: item4,
  },
  {
    id: 5,
    name: "Mr. Tam Anh Trần",
    position: "Director of International Relations",
    content:
      "Blockchain expert advisor. He inherits a multidisciplinary education in Information Technology and Business and more than 10 years of experience in designing learning models and directly teaching for international educational institutions.",
    contentModal1:
      "Blockchain expert advisor. He inherits a multidisciplinary education in Information Technology and Business and more than 10 years of experience in designing learning models and directly teaching for international educational institutions.",
    contentModal2:
      "He is the co-founder of A Different Tribe – Brussels | Lecturer at University of Business and International Studies – Geneva | Brussels is in charge of External Relations and International Cooperation at the Union of Science and Technology Associations of Ho Chi Minh City",
    contentModal3:
      "His outstanding scientific works: Finck, G. and Tran, T. A. (2018). The Perks Of Diversity In Knowledge Management – An Observation From Vietnam Education Sector Tran, T. A. (2021). Favorability Issues And Opportunities For Young Enterpreneurs: A Five- factor Political Model Investigation In Vietnam",
    image: item5,
  },
  {
    id: 6,
    name: "Mr. Bằng Nguyễn",
    position: "Technology Director",
    content: "Responsible for technology activities at VBI.",
    contentModal1:
      "Responsible for technology activities at VBI. Before that, he participated in many Blockchain projects both at home and abroad.",
    contentModal2:
      "At the same time, he is also the CEO of Insonl Vietnam, an agency that provides solutions to support online business administration, operation and business for businesses, such as: Web design, application development, system customization. operating,…",
    contentModal3:
      "With a passion for technology, he continued to invest and became a Shareholder of THE VERSE Technology Research and Development Co., Ltd",
    image: item7,
  },
  {
    id: 7,
    name: "Mr. Sơn Trần",
    position: "Marketing Manager",
    content: "Expert advisor on Communication - Marketing strategy for VBI",
    contentModal1:
      "Expert advisor on Communication - Marketing strategy for VBI",
    contentModal2:
      "People who are passionate about Blockchain technology. Striving to bring the most in-depth information on blockchain technology in the simplest form",
    contentModal3:
      "Having more than 11 years of experience in implementing Marketing with international partners",
    image: item8,
  },
];

export default function Team() {
  const [idOpen, setIdOpen] = useState();
  const { t } = useTranslation();

  const toggleModal = (id) => {
    setIdOpen(id);
  };

  const renderTeam = () => {
    return listTeam.map((item, index) => {
      return (
        <div
          key={`${index} : ${item.id}`}
          className="team__item"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="team__image">
            <div className="team__image-item">
              <img src={item.image} alt="imageB" />
              <div className="icon-hover" onClick={() => toggleModal(item.id)}>
                <img src={hover} alt="icon" />
              </div>
            </div>
          </div>
          <div className="team__content">
            <h5 onClick={() => toggleModal(item.id)}>{item.name}</h5>
            <h6>{t(item.position)}</h6>
            <p>{t(item.content)}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="team">
      <div className="team__title">
        <h2>{t("The team")}</h2>
        <p>
          {t(
            "Meet the team behind Rivius. We’re a small team that loves to create great experiences and make meaningful connections between builders and customers. Join our remote team!"
          )}
        </p>
      </div>
      <div className="team__list">{renderTeam()}</div>
      {listTeam.map((team, idx) => {
        return (
          <div key={idx}>
            <ModalTeam
              name={team.name}
              content={t(team.content)}
              image={team.image}
              position={t(team.position)}
              contentModal1={t(team.contentModal1)}
              contentModal2={t(team.contentModal2)}
              contentModal3={t(team.contentModal3)}
              contentModal4={t(team.contentModal4)}
              shown={team.id === idOpen}
              close={() => {
                setIdOpen(false);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
