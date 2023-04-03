import React from "react";
import plant from "../../../assets/icons/plant.svg";
import price from "../../../assets/icons/price.svg";
import flower from "../../../assets/icons/flower.svg";
import { useTranslation } from "react-i18next";

const listOption = [
  {
    image: plant,
    title: "1. Long Term Sustainability",
    content:
      "Our fixed Apy is studied to be more sustainable than other Defi Projects.",
  },
  {
    image: price,
    title: "2. 10X-30X Less Inflationary",
    content: "Eliminate intermediaries, reduce costs. Decentralized operations",
  },
  {
    image: flower,
    title: "3. High Sustainable APY",
    content:
      "The server system specialized in storing data will be completely disconnected from the outside world. Optimize information security.",
  },
];

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <div className="introduction" data-aos="zoom-in" data-aos-duration="2000">
      <h2>{t("Outstanding Blockchain Solution")}</h2>
      <p>
        {t(
          "Pioneer in building Blockchain ecosystem for Vietnamese people. Rivius Network - multi-chain connection platform for applications on Web3"
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
          );
        })}
      </div>
    </div>
  );
}
