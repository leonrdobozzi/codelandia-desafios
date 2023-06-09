import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Profiles } from "../pages/profiles";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          localStorage.getItem("logged") === "true" ? <Home /> : <Profiles />
        }
      />
    </Routes>
  );
};
