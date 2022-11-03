import LandingPage from '../pages/LandingPage/LandingPage';
import PortoPage from '../pages/PortoPage/PortoPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

const LaunchRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.LANDING} element={<LandingPage />} />
        <Route path={AppRoutes.PORTOFOLIO} element={<PortoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LaunchRouter;
