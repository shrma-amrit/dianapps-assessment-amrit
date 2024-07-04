import { createBrowserRouter, createHashRouter } from "react-router-dom";
import {
  BENEFICIARY_BY_ID_PATH,
  BENEFICIARY_PATH,
  DEFAULT_PATH,
  HOME_PATH,
} from "../utils/constants";
import { Home } from "../pages/Home";
import { ManageBeneficiaries } from "../pages/ManageBeneficiaries";
import { NotFound } from "../pages/NotFound";
import { BeneficiaryById } from "../pages/BeneficiaryById";

const AppRouter = createHashRouter([
  {
    path: HOME_PATH,
    element: <Home />,
  },
  {
    path: BENEFICIARY_PATH,
    element: <ManageBeneficiaries />,
  },
  {
    path: BENEFICIARY_BY_ID_PATH,
    element: <BeneficiaryById />,
  },
  {
    path: DEFAULT_PATH,
    element: <NotFound />,
  },
]);

export { AppRouter };
