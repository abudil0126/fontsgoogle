import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../context/store";
import "./Sidebar.scss";
import { closeSidebar } from "../../context/features/sidebarSlice";
import { FiX } from "react-icons/fi";
import { LiaPenFancySolid } from "react-icons/lia";
import {
  Grid,
  Input,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { RxSlider } from "react-icons/rx";
import { useState } from "react";

const Sidebar: React.FC = ({
  setSideBarInput,
  setSliderValue,
}: {
  setSideBarInput: (value: string) => void;
  setSliderValue: (value: number) => void;
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [inputValue, setInputValue] = useState("");
  const [sliderValue, setSliderValueState] = useState(0);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setSideBarInput(e.target.value);
  };

  const handleSliderInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValueState(parseInt(e.target.value));
    setSliderValue(parseInt(e.target.value));
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-close" onClick={handleCloseSidebar}>
        <FiX />
      </button>
      <div>
        <h3 className="sidebar-title">Preview</h3>
        <textarea
          className="sidebar-textarea"
          placeholder="Type something"
          cols={30}
          rows={10}
          value={inputValue}
          onChange={handleInput}
        ></textarea>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
          }}
        >
          <Grid item>
            <Input
              value={sliderValue}
              onChange={handleSliderInput}
              size="small"
              style={{ margin: "30px 0" }}
              inputProps={{
                step: 1,
                min: 8,
                max: 300,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
            px
          </Grid>
          <Grid item xs>
            <Slider
              value={sliderValue}
              onChange={handleSliderInput as any}
              aria-labelledby="input-slider"
              min={8}
              max={300}
              valueLabelDisplay="auto"
            />
          </Grid>
        </Grid>
        <Accordion className="sidebar-accordion">
          <AccordionSummary
            className="sidebar-accordion-summary"
            expandIcon={<MdExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <LiaPenFancySolid /> Decorative stroke
          </AccordionSummary>
          <AccordionDetails className="btn-wrapper">
            <button>Serif</button>
            <button>Slab Serif</button>
            <button>Sans Serif</button>
          </AccordionDetails>
        </Accordion>
        <Accordion className="sidebar-accordion">
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="sidebar-accordion-summary"
          >
            <RxSlider /> Properties
          </AccordionSummary>
          <AccordionDetails>
            <div className="properties">
              <span>Number of styles</span>
              <Slider
                defaultValue={18}
                aria-label="Default"
                min={1}
                max={18}
                valueLabelDisplay="auto"
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
