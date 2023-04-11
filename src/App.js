import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./Scss/main.scss";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Project from "./pages/Project";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
}

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      anchorPlacement: "bottom-bottom",
      animatedClassName: "aos-animate",
    });
    return () => AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
