import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/searchPage/SearchPage";
import FormPage from "../pages/formPage/FormPage";
import HomePage from "../pages/homePage/HomePage";

import { DataProvider } from "../context/DataContext";

const AppRouter = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default AppRouter;
