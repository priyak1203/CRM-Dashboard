import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import { setColor, setMode } from "./redux/actions/ThemeActions";

function App() {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  // const themeReducer = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const modeClass = localStorage.getItem("themeMode");
    const colorClass = localStorage.getItem("themeColor");

    dispatch(setMode(modeClass));
    dispatch(setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
        <Sidebar />
        <div className="layout-content">
          <Topbar />
          <main className="layout-main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
