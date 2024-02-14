import "./Footer.scss";
import FontsGoogle from "../../assets/footer-font.svg";
import GitHub from "../../assets/github.svg";
import Blog from "../../assets/blog.svg";
import MDesign from "../../assets/design.svg";
import GDesign from "../../assets/g-design.svg";
import Icon from "../../assets/google-fonts.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../context/store";

const Footer = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <>
      <div className={`footer ${isOpen ? "open" : ""}`}>
        <div className="footer-title__wrapper">
          <h1 className="footer-title">
            Google <span>Fonts</span>
          </h1>
          <p className="footer-description">
            Google Fonts makes it easy to bring personality and performance to
            your websites and products. Our robust catalog of open-source fonts
            and icons makes it easy to integrate expressive type and icons
            seamlessly — no matter where you are in the world.
          </p>
        </div>
        <div className="footer-more">
          <Link
            to={"https://fonts.google.com/about"}
            className="footer-more__item"
          >
            <img src={FontsGoogle} alt="" />
            <div className="footer-more__item-text-wrapper">
              <h4>About us</h4>
              <p>
                Making the web more beautiful, fast and open through great
                typography & icons
              </p>
            </div>
          </Link>
          <Link
            to={"https://fonts.googleblog.com/"}
            className="footer-more__item"
          >
            <img src={Blog} alt="" />
            <div className="footer-more__item-text-wrapper">
              <h4>Blog</h4>
              <p>
                This blog has stories about how different fonts were designed
                for various languages and scripts
              </p>
            </div>
          </Link>
          <Link
            to={"https://github.com/google/fonts"}
            className="footer-more__item"
          >
            <img src={GitHub} alt="" />
            <div className="footer-more__item-text-wrapper">
              <h4>Fonts GitHub</h4>
              <p>
                This repository contains all the binary font files served by
                Google Fonts
              </p>
            </div>
          </Link>
          <Link
            to={"https://m3.material.io/styles/typography/overview"}
            className="footer-more__item"
          >
            <img src={MDesign} alt="" />
            <div className="footer-more__item-text-wrapper">
              <h4>Material Design</h4>
              <p>
                A cross-platform design system for creating high-quality digital
                experiences
              </p>
            </div>
          </Link>
          <Link
            to={"https://github.com/google/material-design-icons"}
            className="footer-more__item"
          >
            <img src={GitHub} alt="" />
            <div className="footer-more__item-text-wrapper">
              <h4>Icons GitHub</h4>
              <p>
                This repository contains all the binary font files served by
                Google Icons
              </p>
            </div>
          </Link>
          <Link
            to={"https://design.google/tags/typography"}
            className="footer-more__item"
          >
            <img src={GDesign} alt="" />
            <div className="footer-more__item-text-wrapper">
              <h4>Google Design</h4>
              <p>
                Google Design highlights the breadth and craft of design and
                fonts from speculation, to work-in-progress, to finished product
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="footer-privacy">
        <img width={40} height={40} src={Icon} alt="" />
        <div className="footer-privacy-links">
          <Link to={"https://policies.google.com/privacy?hl=en"}>Privacy</Link>
          <Link to={"https://policies.google.com/terms?hl=en"}>
            Terms of service
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
