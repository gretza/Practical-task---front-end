import Layout from "./components/Layout/Layout";
import Navbar from "./components/Heading/Heading";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { routes } from "./components/constants/routes";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Layout>
      <Routes>
        {user ? (
          <Route path={routes.homePage} element={<HomePage />} />
        ) : (
          <Route path={routes.loginPage} element={<LoginPage />} />
        )}
        <Route path={routes.registerPage} element={<RegisterPage />} />
      </Routes>
    </Layout>

    // <>
    //   <Navbar></Navbar>
    //   <Layout>
    //     <Routes>
    //       <Route path={routes.loginPage} element={<LoginPage />} />
    //       <Route path={routes.registerPage} element={<RegisterPage />} />
    //       <Route path={routes.homePage} element={<HomePage />} />
    //     </Routes>
    //   </Layout>
    // </>
  );
}

export default App;
