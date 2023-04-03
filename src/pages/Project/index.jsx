import React, { useState, useEffect, memo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import icon from "../../assets/icons/icon-project.svg";
import check from "../../assets/icons/check.svg";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import Footer from "../../components/Footer";
import Option from "../../components/Option";
import Partner from "../../components/Partner";
import Subscribe from "../../components/Subscribe";
import { useTranslation } from "react-i18next";

const listProjects = [
  {
    id: 1,
    title: "VietPay",
    image1: project1,
    image2: project2,
    content:
      "Cryptocurrency wallet dedicated to the Rivius Network ecosystem. Allows buying, selling, storing Crypto assets",
    content1: "Safety - High security",
    content2: "Supports various cryptocurrencies",
    content3: "Use cross-platform website/mobile",
  },
  {
    id: 2,
    title: "VietBox",
    image1: project1,
    image2: project2,
    content:
      "Real-time and data-connected applications in transport and logistics management",
    content1: "Supply chain quality check and validation",
    content2: "Automation management and payments",
    content3: "Improve freight efficiency",
  },
  {
    id: 3,
    title: "TRASA",
    image1: project1,
    image2: project2,
    content: "Distributed database system and product traceability",
    content1: "Trust - Continuous improvement",
    content2: "Unify data on product origin",
    content3: "Real-time information updates",
  },
  {
    id: 4,
    title: "Frowth",
    image1: project1,
    image2: project2,
    content:
      "Solutions to apply blockchain technology in Fintech to develop the financial system",
    content1: "Increase transaction speed and security",
    content2: "Smart contract development",
    content3: "Diversity of financial products and services",
  },
  {
    id: 5,
    title: "Studemy",
    image1: project1,
    image2: project2,
    content:
      "Application to validate diplomas, certifications, training certificates and scientific background",
    content1: "Ensure openness and transparency",
    content2: "Compare and verify information quickly",
    content3:
      "Use a unique web address for each diploma, certificate, certificate, scientific background",
  },
  {
    id: 6,
    title: "Exam",
    image1: project1,
    image2: project2,
    content: "Blockchain application in the management of exams",
    content1:
      "Mechanism of data protection, preventing the act of arbitrarily editing information",
    content2: "Convenience and saving management costs",
    content3: "Disclosure and transparency of related parties data",
  },
  {
    id: 7,
    title: "Adoctic",
    image1: project1,
    image2: project2,
    content:
      "Handbook of technology for storing medical records and genetic data",
    content1: "Profile information stored is immutable",
    content2:
      "Accurate data connection for 3rd parties like insurance, pharmacy, research",
    content3: "The AI ​​system supports medical records diagnosis",
  },
  {
    id: 8,
    title: "Tasker",
    image1: project1,
    image2: project2,
    content:
      "Production management software. Easily track each step in the process",
    content1: "Traceability - confirm the origin of input materials",
    content2: "Track the quantity of goods based on Al . calculation",
    content3: "Save cost and time of machine system maintenance",
  },
  {
    id: 9,
    title: "Kingstats",
    image1: project1,
    image2: project2,
    content:
      "Accounting System - Auditing Rivius Blockchain application. Secure, look up, check data quickly",
    content1: "Top security to resist data change",
    content2:
      "Information is centralized and updated continuously, saving business costs",
    content3: "Ensure the authenticity of accounting records through Al",
  },
  {
    id: 10,
    title: "Alvalink",
    image1: project1,
    image2: project2,
    content: "Educational training quality assessment and management system",
    content1: "Store a large amount of teaching materials",
    content2:
      "Program and evaluate faculty/student performance from lecture data and test results",
    content3: "Potential for curriculum transformation",
  },
  {
    id: 11,
    title: "Walletia",
    image1: project1,
    image2: project2,
    content:
      "Blockchain application supports domestic and international payment forms",
    content1: "Fast cross-border payments",
    content2:
      "Reduce transaction costs, allowing direct transactions between users",
    content3: "Safety - Security - Transparency",
  },
  {
    id: 12,
    title: "Nitrox",
    image1: project1,
    image2: project2,
    content:
      "Derivatives exchange. Diversify investment portfolio, financial leverage",
    content1: "Transparent Proof of Reserve (PoR) system",
    content2: "Trade quickly with thousands of cryptocurrencies",
    content3: "2-Factor Authentication (2FA)",
  },
];

const Project = () => {
  const { t } = useTranslation();
  const [option, setOption] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

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
                <button>{t("Explore more")}</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    let id = searchParams.get("id");
    if (id) {
      window.location.href = "#" + id;
    }
  }, [searchParams]);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let position1 = document.getElementById("1").offsetTop;
      let height = document.getElementById("1").offsetHeight;
      let position2 = document.getElementById("2").offsetTop;
      let position3 = document.getElementById("3").offsetTop;
      let position4 = document.getElementById("4").offsetTop;
      let position5 = document.getElementById("5").offsetTop;
      let position6 = document.getElementById("6").offsetTop;
      let position7 = document.getElementById("7").offsetTop;
      let position8 = document.getElementById("8").offsetTop;
      let position9 = document.getElementById("9").offsetTop;
      let position10 = document.getElementById("10").offsetTop;
      if (window.scrollY < position1 + height / 2) {
        setOption(1);
      } else if (window.scrollY < position2 + height / 2) {
        setOption(2);
      } else if (window.scrollY < position3 + height / 2) {
        setOption(3);
      } else if (window.scrollY < position4 + height / 2) {
        setOption(4);
      } else if (window.scrollY < position5 + height / 2) {
        setOption(5);
      } else if (window.scrollY < position6 + height / 2) {
        setOption(6);
      } else if (window.scrollY < position7 + height / 2) {
        setOption(7);
      } else if (window.scrollY < position8 + height / 2) {
        setOption(8);
      } else if (window.scrollY < position9 + height / 2) {
        setOption(9);
      } else if (window.scrollY < position10 + height / 2) {
        setOption(10);
      }
    });
    return () => {
      return window.removeEventListener("scroll", () => {
        console.log("remove event");
      });
    };
  });

  return (
    <div className="project">
      <div className="project-title">
        <div className="container">
          <h1
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
          >
            {t("Project")} <img src={icon} alt="icon" />
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
            className={`${option === res.id ? "active" : ""}`}
            href={`#${res.id}`}
            key={index}
            onClick={() => {
              setOption(res.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default memo(Project);
