import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/Contact";
import BlogPage from "./components/pages/BlogPage";
import Collegelist from "./components/pages/Collegelist";
import Slider from "./components/Slider";
import Course from "./components/pages/Course";
import AboutNepal from "./components/pages/AboutNepal";
import Exam from "./components/pages/Exam";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Slider />
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route
            path="/mbbs-list-of-college-in-nepal"
            element={<Collegelist />}
          ></Route>
          <Route path="/mbbs-course-in-nepal" element={<Course />}></Route>
          <Route path="/about-nepal" element={<AboutNepal />}></Route>
          <Route path="/mbbs-exam-in-nepal" element={<Exam/>}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
