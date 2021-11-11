import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import GalleryPage from "./pages/GalleryPage";
import MainHeader from "./components/MainHeader";
import LogginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/loggin" element={<LogginPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
