import logo from "./logo.svg";
import "./App.css";
import Artworks from "./components/Artworks";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Image from "./components/Image";
import About from "./components/About";
import LoadingMask from "./components/LoadingMask";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArt = () => {
    fetch(
      "https://api.harvardartmuseums.org/IMAGE?apikey=6ed683b4-8a85-4429-9d57-5d78d8ff8fca&size=20"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.records);
        setLoading(false);
      });
  };
  useEffect(() => fetchArt(), []);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/collection"
          element={loading ? <LoadingMask /> : <Artworks data={data} />}
        />
        <Route path="/image/:id" element={<Image />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
