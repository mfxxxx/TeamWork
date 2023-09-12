import { Route, Routes } from "react-router-dom";
import Header from "./../header/Header";
import Footer from "./../footer/Footer";

import { MainPage, GoodsPage, AccountPage, Page404 } from "../../pages";
import "./../../styles/style.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/goods" element={<GoodsPage />} />
            <Route path="/login" element={<AccountPage />} />
            <Route path="/register" element={<AccountPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
