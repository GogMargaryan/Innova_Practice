import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import PagesPage from "../pages/PagesPage";
const { HOME_PAGE_ROUTE } = ROUTER;
const { MENU_PAGE_ROUTE } = ROUTER;
const { PAGES_PAGE_ROUTE } = ROUTER;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={MENU_PAGE_ROUTE} element={<MenuPage />} />
      <Route path={PAGES_PAGE_ROUTE} element={<PagesPage />} />
    </Routes>
  );
};

export default AppRoutes;
