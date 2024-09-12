import Homepage from "./pages/Homepage";
import Sidebar from "./component/Sidebar";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import Blogdetail from"./component/BlogDetail";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Hook from "./component/Hook";
import PageNotFound from "./pages/PageNotFound";
import Fetch from "./pages/Fetch";


function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path="/dashboard" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="blog" element={<Blog/>}/>
          <Route path="blogdetails" element={<Blogdetail/>}/>
          <Route path="hook" element={<Hook/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="Fetch" element={<Fetch/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
