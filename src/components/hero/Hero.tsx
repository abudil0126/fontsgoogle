import { useEffect } from "react";
import "./Hero.scss";
import instance from "../../helpers/features/api";
import { useState } from "react";
import { Font } from "../../types";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = ({
  searchTerm,
  sideBarInput,
  sliderValue,
}: {
  searchTerm: string;
  sideBarInput: string;
  sliderValue: number;
}) => {
  const [fonts, setFonts] = useState<Font[]>([]);
  const [filterFonts, setFilterFonts] = useState<Font[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const API_KEY = "AIzaSyCawzwYiYWGFcCts0QZ2tMhhcntxm07yIk";

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const response = await instance.get(`/webfonts?key=${API_KEY}`);
        const data = await response.data;
        setFonts(data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFonts();
  }, []);

  useEffect(() => {
    const filters = () => {
      searchTerm.trim().length > 0
        ? setFilterFonts(
            fonts.filter((font) =>
              font.family.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        : "";
    };
    filters();
  }, [searchTerm]);

  const renderFontFamilies = () => {
    return fonts.map((font: Font) => (
      <style key={font.family}>
        {`@font-face {
        font-family: "${font.family}";
        src: url("${font.files.regular}") ;
      }`}
      </style>
    ));
  };

  return (
    <div className="hero">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="hero-info">
            <div>
              <p className="hero-info__text">
                {searchTerm ? filterFonts.length : fonts.length} of 1603
                families
              </p>
              <div className="hero-info__about-wrapper">
                <p className="hero-info__about">
                  About these results <FiInfo />
                </p>
              </div>
            </div>
          </div>
          <div className="hero-fonts">
            {renderFontFamilies()}
            {searchTerm ? (
              filterFonts.length === 0 ? (
                <p>Can't find any fonts</p>
              ) : (
                filterFonts.map((font: Font) => (
                  <Link
                    to={`/single-page/${font.family}`}
                    className="hero-fonts__wrapper"
                    key={font.family}
                  >
                    <div className="hero-fonts__wrapper-title">
                      <h3 className="hero-fonts-title">{font.family}</h3>
                      <p className="hero-fonts-variants">
                        {font.variants.length} styles
                      </p>
                    </div>
                    <div className="hero-fonts-text__wrapper">
                      <p
                        className="hero-fonts-text"
                        style={{
                          fontFamily: font.family,
                          fontSize: `${sliderValue ? sliderValue || "" : 40}px`,
                        }}
                      >
                        {sideBarInput
                          ? sideBarInput
                          : " Everyone has the right to freedom of thought "}
                      </p>
                    </div>
                  </Link>
                ))
              )
            ) : (
              fonts.map((font: Font) => (
                <Link
                  to={`/single-page/${font.family}`}
                  className="hero-fonts__wrapper"
                  key={font.family}
                >
                  <div className="hero-fonts__wrapper-title">
                    <h3 className="hero-fonts-title">{font.family}</h3>
                    <p className="hero-fonts-variants">
                      {font.variants.length} styles
                    </p>
                  </div>
                  <div className="hero-fonts-text__wrapper">
                    <p
                      className="hero-fonts-text"
                      style={{
                        fontFamily: font.family,
                        fontSize: `${sliderValue ? sliderValue || "" : 40}px`,
                      }}
                    >
                      {sideBarInput
                        ? sideBarInput
                        : " Everyone has the right to freedom of thought "}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
