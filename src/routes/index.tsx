import { Routes, Route } from "react-router-dom";
import Home from "../routes/home";
import SinglePage from "../routes/single-page";

const RouteController = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-page/:family" element={<SinglePage />} />
      </Routes>
    </>
  );
};

export default RouteController;
