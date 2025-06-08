import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddParcel from "./pages/AddParcel";
import UpdateParcel from "./pages/UpdateParcel";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          📦 Parcel Management System
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddParcel />} />
          <Route path="/update/:id" element={<UpdateParcel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
