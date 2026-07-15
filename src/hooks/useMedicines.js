import { useEffect, useState } from "react";
import {
    getMedicines,
    addMedicine,
    updateMedicine,
    deleteMedicine,
  } from "../services/medicineService";

export default function useMedicines() {

    const [medicines, setMedicines] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const loadMedicines = async () => {

        try {

            setLoading(true);

            const data = await getMedicines();

            setMedicines(data);

        } catch (err) {

            setError("Unable to fetch medicines");

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadMedicines();

    }, []);

    const createMedicine = async (medicine) => {

        await addMedicine(medicine);

        loadMedicines();

    };

    const editMedicine = async (id, medicine) => {

        await updateMedicine(id, medicine);

        loadMedicines();

    };

    const removeMedicine = async (id) => {

        await deleteMedicine(id);

        loadMedicines();

    };

    return {

        medicines,

        loading,

        error,

        createMedicine,

        editMedicine,

        removeMedicine,

        loadMedicines,

    };

}