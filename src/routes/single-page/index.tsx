import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Container, styled } from "@mui/material";
import { useEffect } from "react";
import instance from "../../helpers/features/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Font } from "../../types";

const SinglePage = () => {
  const API_KEY = "AIzaSyCawzwYiYWGFcCts0QZ2tMhhcntxm07yIk";
  const { family } = useParams();
  const [singleFont, setSingleFont] = useState<Font>();

  useEffect(() => {
    const fetchSinglePage = async () => {
      try {
        const response = await instance.get(
          `/webfonts?key=${API_KEY}&family=${family}`
        );
        const data = await response.data;
        setSingleFont(data.items[0]);
        console.log(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSinglePage();
  }, []);

  // const renderFontDesign = () => {
  //   return singleFont?.variants.map((variant) => (
  //     <style key={variant}>{}</style>
  //   ));
  // };

  return (
    <Container>
      <Navbar setSearchTerm={() => {}} />
      <div className="single-page">
        <h1 className="single-page__title">{singleFont?.family}</h1>
        <div className="single-page__fonts-wrapper">
          {/* {renderFontDesign()} */}
          {singleFont?.variants.map((variant) => (
            <div className="single-page__font" key={variant}>
              <p className="font-variant">{variant}</p>
              <div>
                <p
                  style={{
                    fontFamily: singleFont?.family,
                    fontWeight: variant,
                    fontStyle: variant.includes("italic")
                      ? "italic"
                        ? "italic"
                        : "normal"
                      : "normal",
                  }}
                  className="font-description"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default SinglePage;
