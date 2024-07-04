import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { FaRegListAlt, FaRegUser } from "react-icons/fa";
import "./Header.css";
import { pathHeadingMap } from "../../utils/utils";
import { HOME_PATH, PROFILE_PATH } from "../../utils/constants";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const homeIconClickHandler = () => {
    navigate(HOME_PATH, {
      replace: !!matchPath({ path: HOME_PATH, end: true }, location?.pathname),
    });
  };

  const userIconClickHandler = () => {
    navigate(`/${PROFILE_PATH}`, {
      replace: !!matchPath(
        { path: PROFILE_PATH, end: true },
        location?.pathname
      ),
    });
  };

  return (
    <div className="w-100">
      <div className="displayFlex headerContainer alignCenter">
        <div className="displayFlex alignCenter">
          <FaRegListAlt className="homeIcon" onClick={homeIconClickHandler} />
          <span className="pageHeading">
            {pathHeadingMap(location?.pathname)}
          </span>
        </div>
        <FaRegUser className="userIcon" onClick={userIconClickHandler} />
      </div>
    </div>
  );
}

export default Header;
