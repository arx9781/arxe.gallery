import React from "react";
import "./App.css";
import images from "./imageData";
import FilterButtons from "./components/FilterButtons";
import ImageGallery from "./components/ImageGallery";
import Title from "./components/Title";
import ScrollTopButton from "./components/ScrollTopButton";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.category === filter);

  return (
    <>
      <main className="App">
        <Title />
        <FilterButtons onFilterChange={handleFilterChange} />
        <ImageGallery images={filteredImages} />
        <ScrollTopButton />
        <Footer />
      </main>
    </>
  );
};

export default App;
