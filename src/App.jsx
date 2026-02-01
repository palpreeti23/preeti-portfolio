import Navbar from "./component/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
// import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Preetify from "./pages/Preetify";
import Blog from "./pages/Blog";
import Layout from "./component/Layout";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <AnimatePresence> */}
        <Routes
        // location={location} key={location.pathname}
        >
          <Route
            path="/"
            element={
              // <Layout>
              <Home />
              // </Layout>
            }
          />
          <Route
            path="/preetify"
            element={
              // <Layout>
              <Preetify />
              // </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              // <Layout>
              <Blog />
              // </Layout>
            }
          />
          {/* <Route path="/about" element={<About />} /> */}
          <Route
            path="/skills"
            element={
              // <Layout>
              <Skills />
              // </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              // <Layout>
              <Projects />
              // {/* </Layout> */}
            }
          />
          <Route
            path="/contact"
            element={
              // <Layout>
              <Contact />
              // {/* </Layout> */}
            }
          />
        </Routes>
        {/* </AnimatePresence> */}
      </Router>
    </div>
  );
}

export default App;
