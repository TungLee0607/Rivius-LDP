import React from "react";
import app from "../../assets/icons/app.svg";
import packageIcon from "../../assets/icons/package.svg";
import switchIcon from "../../assets/icons/switch.svg";
import clock from "../../assets/icons/clock.svg";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const listOption = [
  {
    image: clock,
    title: "block time",
    content: "~3 secs",
  },
  {
    image: packageIcon,
    title: "total blocks",
    content: 14737677,
  },
  {
    image: app,
    title: "validators",
    content: 297,
  },
  {
    image: switchIcon,
    title: "transfers",
    content: 364496344,
  },
];

export default function Option() {
  const { t } = useTranslation()

  return (
    <div className="option">
      {listOption.map((item, index) => {
        return (
          <div className="option__item" key={index}>
            <div className="option__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p>{t(item.title)}</p>
            <h6>
              {item.content === "~3 secs" ? (
                item.content
              ) : (
                <CountUp separator="," end={item.content} duration={3} />
              )}
            </h6>
          </div>
        );
      })}
    </div>
  );
}
