import "./CSS/style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPost from "./components/AddPost";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import SinglePostPage from "./components/SinglePostPage";
import EditPost from "./components/EditPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
