import React from "react";
import partner1 from "../../assets/images/partners/partner1.svg";
import partner2 from "../../assets/images/partners/partner2.svg";
import partner3 from "../../assets/images/partners/partner3.svg";
import partner4 from "../../assets/images/partners/partner4.svg";
import partner5 from "../../assets/images/partners/partner5.svg";
import partner6 from "../../assets/images/partners/partner6.svg";
import { useTranslation } from "react-i18next";

export default function Partner() {
  const { t } = useTranslation();

  return (
    <div className="partner">
      <p>{t("We’ve worked with some great organizations")}</p>
      <div className="partner-list">
        <div className="partner-item">
          <img src={partner1} alt="partner" />
        </div>
        <div className="partner-item">
          <img src={partner2} alt="partner" />
        </div>
        <div className="partner-item">
          <img src={partner3} alt="partner" />
        </div>
        <div className="partner-item">
          <img src={partner4} alt="partner" />
        </div>
        <div className="partner-item">
          <img src={partner5} alt="partner" />
        </div>
        <div className="partner-item">
          <img src={partner6} alt="partner" />
        </div>
      </div>
    </div>
  );
}
