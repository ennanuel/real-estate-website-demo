import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ApartmentGroups from "./pages/ApartmentGroups";
import Apartments from "./pages/Apartments";
import Apartment from "./pages/Apartment";
import Location from "./pages/Location";
import Contact from "./pages/Contact";



function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apartment-groups" element={<ApartmentGroups />} />
        <Route path="/apartment-groups/:id/apartments" element={<Apartments />} />
        <Route path="/apartments/apartment/:id" element={<Apartment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
