import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs";
import Rush from "./pages/Rush/Rush";
import Members from "./pages/Members/Members";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import { ROUTES } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="content-wrapper">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTES.RUSH} element={<Rush />} />
          <Route path={ROUTES.MEMBERS} element={<Members />} />
          <Route path={ROUTES.CONTACT_US} element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
