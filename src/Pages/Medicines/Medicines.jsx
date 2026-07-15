import Header from "../../components/Header/Header";
import MedicineForm from "../../components/MedicineForm/MedicineForm";
import MedicineTable from "../../components/MedicineTable/MedicineTable";
import SearchBar from "../../components/SearchBar/SearchBar";
import useMedicines from "../../hooks/useMedicines";

function Medicines() {

    const {

        medicines,

        loading,

        error,

        createMedicine,

        editMedicine,

        removeMedicine,

    } = useMedicines();

    return (

        <div className="container">

            <Header />

            <MedicineForm createMedicine={createMedicine} />

            <SearchBar />

            <MedicineTable

                medicines={medicines}

                loading={loading}

                error={error}

                editMedicine={editMedicine}

                removeMedicine={removeMedicine}

            />

        </div>

    );

}

export default Medicines;