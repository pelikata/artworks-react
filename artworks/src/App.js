import logo from "./logo.svg";
import "./App.css";
import Artworks from "./components/Artworks";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Image from "./components/Image";

function App() {
  const [data, setData] = useState([]);

  const fetchArt = () => {
    fetch(
      "https://api.harvardartmuseums.org/IMAGE?apikey=6ed683b4-8a85-4429-9d57-5d78d8ff8fca&size=20"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.records);
      });
  };
  useEffect(() => fetchArt(), []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Artworks data={data} />} />
        <Route path="/image/:id" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
