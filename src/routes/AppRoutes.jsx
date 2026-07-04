import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../Pages/Dashboard/Dashboard";
import Medicines from "../Pages/Medicines/Medicines";
import AddMedicine from "../Pages/AddMedicine/AddMedicine";
import EditMedicine from "../Pages/EditMedicine/EditMedicine";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
        <Route path="/edit-medicine" element={<EditMedicine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;