import { matchPath } from "react-router-dom";
import {
  BENEFICIARY_BY_ID_PATH,
  BENEFICIARY_PATH,
  HOME_PATH,
} from "./constants";

const pathHeadingMap = (pathName) => {
  const match = (pattern) =>
    !!matchPath({ path: pattern, end: true }, pathName);

  if (match(HOME_PATH)) {
    return "Home";
  } else if (match(BENEFICIARY_PATH)) {
    return "Manage Beneficiaries";
  } else if (match(BENEFICIARY_BY_ID_PATH)) {
    return "View Beneficiary";
  } else {
    return "Not Found";
  }
};

const generateRandomId = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 9; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export { pathHeadingMap, generateRandomId };
