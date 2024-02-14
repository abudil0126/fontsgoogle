import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Container } from "../../utils";
import Sidebar from "../../components/sidebar-filter/Sidebar";
import Hero from "../../components/hero/Hero";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sideBarInput, setSideBarInput] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(0);

  return (
    <div className="home">
      <Sidebar
        setSliderValue={setSliderValue}
        setSideBarInput={setSideBarInput}
      />
      <Container>
        <Navbar setSearchTerm={setSearchTerm} />
        <Hero
          sliderValue={sliderValue}
          sideBarInput={sideBarInput}
          searchTerm={searchTerm}
        />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
