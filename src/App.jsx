import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error"; 

const Name = () => {
  return <h1> Hello, I am Name Page </h1>;
};


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/name" element={<Name />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
