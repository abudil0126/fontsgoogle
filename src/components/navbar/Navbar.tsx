import "./Navbar.scss";
import FontsGoogle from "../../assets/google-fonts.svg";
import { FiFilter, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../context/features/sidebarSlice";
import { RootState } from "../../context/store";

const Navbar = ({
  setSearchTerm,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const handleOpenSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-logo__wrapper">
          <img className="navbar-logo" src={FontsGoogle} alt="" />
          <h1 className="navbar-title">
            Google <span>Fonts</span>
          </h1>
        </div>
        <form className="navbar-search__wrapper">
          <FiSearch />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="navbar-search"
            type="text"
            placeholder="Search fonts"
          />
        </form>
        <button type="button" className="navbar-bag-button">
          <FiShoppingBag />
        </button>
      </div>
      {window.location.pathname.includes("/single-page") ? null : (
        <button
          onClick={handleOpenSidebar}
          type="button"
          className={`navbar-filter ${isOpen ? "open" : ""}`}
        >
          {isOpen ? <FiX /> : <FiFilter />} Filters
        </button>
      )}
    </div>
  );
};

export default Navbar;
