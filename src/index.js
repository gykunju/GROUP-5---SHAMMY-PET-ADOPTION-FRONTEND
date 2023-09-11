

import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'
import Login from "./components/Login.js";

import { UserProvider } from "./components/UserContext.js";
import Pet from './components/Pet/Pet';
import PetCard from './components/Pet/PetCard';
import AdoptionForm from './components/AdoptionForm';
import AdoptedPets from './components/AdoptedPets';
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import AdminCreatePet from './components/CreatePets';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pets" element={<Pet />} />
          <Route path="/pets/:id" element={<PetCard />} />
          <Route path="/pets/:id/adoption" element={<AdoptionForm />} />
          <Route path="/adoptedpets" element={<AdoptedPets />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<AdminCreatePet/>} />
          <Route path="/contact_us" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
