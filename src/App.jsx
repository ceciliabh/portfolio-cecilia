import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="site-bg relative min-h-screen overflow-x-clip">
      <div className="relative z-10">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
