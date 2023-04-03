import React from "react";
import Footer from "../../components/Footer";
import Option from "../../components/Option";
import icon from "../../assets/icons/icon-project.svg";
import Partner from "../../components/Partner";
import twitter from "../../assets/icons/twitter-icon.svg";
import telegram from "../../assets/icons/telegram-icon.svg";
import reddit from "../../assets/icons/reddit-icon.svg";
import youtube from "../../assets/icons/youtube-icon.svg";
import discord from "../../assets/icons/discord-icon.svg";
import github from "../../assets/icons/github-icon.svg";
import community1 from "../../assets/images/community.jpeg";
import community from "../../assets/images/community1.jpeg";
import line from "../../assets/images/Line.png";
import iconDown from "../../assets/icons/down.svg";
import { useTranslation } from "react-i18next";

const listCommunity = [
  {
    id: 1,
    image: telegram,
    name: "Telegram",
    link: "https://t.me/Therivius",
    number: "~85,032 members",
    target: "_blank",
  },
  {
    id: 2,
    image: twitter,
    name: "Twitter",
    link: "https://twitter.com/Therivius",
    number: "~2,247,235 members",
    target: "_blank",
  },
  {
    id: 3,
    image: discord,
    name: "Discord",
    link: "",
    number: "~44,589 members",
    target: "",
  },
  {
    id: 4,
    image: github,
    name: "Github",
    link: "",
    number: "~9,672 stars",
    target: "",
  },
  {
    id: 5,
    image: reddit,
    name: "Reddit",
    link: "",
    number: "~8,247 subscribers",
    target: "",
  },
  {
    id: 6,
    image: youtube,
    name: "Youtube",
    link: "",
    number: "~9,189 subsribers",
    target: "",
  },
];

const renderListCommunity = () => {
  return listCommunity.map((item) => {
    return (
      <a
        key={item.id}
        className="community-item"
        href={item.link}
        target={item.target}
      >
        <div className="community-item-image">
          <img src={item.image} alt={item.name} />
        </div>
        <h6>{item.name}</h6>
        <p>{item.number}</p>
      </a>
    );
  });
};

export default function Community() {
  const { t } = useTranslation();

  return (
    <div className="community">
      <div className="community-title">
        <div className="container">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            {t("Community")} <img src={icon} alt="icon" />
          </h1>
        </div>
      </div>
      <div className="container">
        <Option />
        <div className="community-container">
          <div className="community-content">
            <h2>{t("VBI Community")}</h2>
            <p>
              {t(
                "VBI community (Vietnam Blockchain Institute) is the “common home” of thousands of technology experts and developers with the common goal of applying Blockchain technology to innovate businesses."
              )}
            </p>
            <div className="community-button">
              <button>
                Join now <img src={iconDown} alt="icon" />
              </button>
            </div>
            <div className="community-list">{renderListCommunity()}</div>
          </div>
          <div
            className="community-image"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="linear"
          >
            <div className="community-image-primary">
              <img src={community} alt="community" />
              <div className="community-image-line">
                <img src={line} alt="line" />
              </div>
            </div>
          </div>
        </div>
        <div className="community-container">
          <div
            className="community-image"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="linear"
          >
            <div className="community-image-primary">
              <img src={community1} alt="community" />
              <div className="community-image-line">
                <img src={line} alt="line" />
              </div>
            </div>
          </div>
          <div className="community-content">
            <h2>{t("The Community")} Rivius</h2>
            <p>
              {t(
                "Participate in open discussions across various threads, explore opportunities to collaborate, and get more involved in projects building on Rivius"
              )}
            </p>
            <div className="community-button">
              <button>
                Join now <img src={iconDown} alt="icon" />
              </button>
            </div>
            <div className="community-list">{renderListCommunity()}</div>
          </div>
        </div>
        <Partner />
        <Footer />
      </div>
    </div>
  );
}
