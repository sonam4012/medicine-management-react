import "./Medicines.css";
import Header from "../../components/Header/Header";
import MedicineForm from "../../components/MedicineForm/MedicineForm";
import SearchBar from "../../components/SearchBar/SearchBar";
import MedicineTable from "../../components/MedicineTable/MedicineTable";

function Medicines() {
  return (
    <div className="container">

      <Header />

      <MedicineForm />

      <SearchBar />

      <MedicineTable />

    </div>
  );
}

export default Medicines;