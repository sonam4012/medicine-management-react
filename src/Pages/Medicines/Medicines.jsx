import { useState } from "react";

import "./Medicines.css";

import Header from "../../components/Header/Header";
import MedicineForm from "../../components/MedicineForm/MedicineForm";
import SearchBar from "../../components/SearchBar/SearchBar";
import MedicineTable from "../../components/MedicineTable/MedicineTable";

function Medicines() {

  const [medicines, setMedicines] = useState([]);

  const [searchText, setSearchText] = useState("");

  return (

    <div className="container">

      <Header />

      <MedicineForm
        medicines={medicines}
        setMedicines={setMedicines}
      />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <MedicineTable
        medicines={medicines}
        searchText={searchText}
      />

    </div>

  );

}

export default Medicines;