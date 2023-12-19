import React from "react";
import SalemWebsite from "./components/SalemWebsite";
import DashboardPage from "./components/DashboardPage";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        {/*<Route path="/" exact component={SalemWebsite} />*/}
        {/*<Route path="/dashboard" exact component={DashboardPage} />*/}
        <Route path="/" element={<SalemWebsite className="main" />} />
        <Route path="/dashboard" element={<DashboardPage className="main" />} />
      </Routes>
  );
}

export default App;
