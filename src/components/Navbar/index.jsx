import React, { useCallback, useState, useEffect } from "react";
import logo from "../../assets/images/Logo.svg";
import menu from "../../assets/icons/menu.svg";
import xmark from "../../assets/icons/x.svg";
import useWindowSize from "../../Hooks/useWindowSize";
import { useSizeObersver } from "../../Hooks/SizeObserver";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../../redux/Slice/LanguageSlide";

const listNav = [
  {
    id: 1,
    name: "About Us",
    link: "/",
  },
  {
    id: 2,
    name: "Projects",
    link: "/project",
  },
  {
    id: 3,
    name: "Community",
    link: "/community",
  },
];

export default function Navbar() {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const { innerWidth } = useSizeObersver();
  const height = useWindowSize();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state?.language);
  const [open, setOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(
    localStorage.getItem("language")
  );
  const handleChangeLanguage = useCallback(
    (languageOfItem) => {
      dispatch(setLanguage(languageOfItem));
      setIsLanguage(languageOfItem);
    },
    [isLanguage]
  );

  const renderListNav = () => {
    return listNav.map((item, index) => (
      <Link
        to={item.link}
        key={index}
        className={item.link === location.pathname ? "active" : ""}
        onClick={() => setOpen(false)}
      >
        {t(item.name)}
      </Link>
    ));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  useEffect(() => {
    if (!localStorage.getItem("language"))
      return localStorage.setItem("language", "en");
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className={height > 0 ? "navbar active-nav" : "navbar"}>
        <div className="container">
          <div className="navbar__container">
            {innerWidth < 768 && (
              <div className="header__nav-icon" onClick={() => setOpen(true)}>
                <img src={menu} alt="menu-icon" />
              </div>
            )}
            <Link href="/" className="navbar__left">
              <img src={logo} alt="logo" />
            </Link>
            <div className="navbar__right">
              {innerWidth > 768 && (
                <div className="navbar__link">{renderListNav()}</div>
              )}
              <div className="navbar__language">
                <div
                  value="vi"
                  className={isLanguage === "en" ? "active" : ""}
                  onClick={() => handleChangeLanguage("en")}
                >
                  EN
                </div>
                <div
                  value="en"
                  className={isLanguage === "vi" ? "active" : ""}
                  onClick={() => handleChangeLanguage("vi")}
                >
                  VN
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className="modal-backdrop" onClick={() => setOpen(false)}>
            <div
              className={open ? "modal-content open" : "modal-content close"}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="x-icon" onClick={() => setOpen(false)}>
                <img src={xmark} alt="x-icon" />
              </div>
              <div className="modal-content-link">{renderListNav()}</div>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
}
