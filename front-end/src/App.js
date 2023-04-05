import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path={routes.loginPage} element={<LoginPage />} />
        {/* <Route path={routes.homePage} element={<HomePage />} /> */}
        <Route path={routes.registerPage} element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

//list.map((item) => <div key={item._id}>{item.title}</div>)
