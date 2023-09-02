import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
const { HOME_PAGE_ROUTE } = ROUTER;
const { MENU_PAGE_ROUTE } = ROUTER;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={MENU_PAGE_ROUTE} element={<MenuPage />} />
    </Routes>
  );
};

export default AppRoutes;
