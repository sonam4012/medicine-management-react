import "./MedicineTable.css";

function MedicineTable({ medicines, searchText }) {

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.fullName
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  if (filteredMedicines.length === 0) {

    return (

      <div className="empty-state">

        No Medicines Found

      </div>

    );

  }

  return (

    <table className="medicine-table">

      <thead>

        <tr>

          <th>Name</th>

          <th>Brand</th>

          <th>Price</th>

          <th>Quantity</th>

          <th>Expiry</th>

        </tr>

      </thead>

      <tbody>

        {filteredMedicines.map((medicine) => (

          <tr key={medicine.id}>

            <td>{medicine.fullName}</td>

            <td>{medicine.brand}</td>

            <td>{medicine.price}</td>

            <td>{medicine.quantity}</td>

            <td>{medicine.expiry}</td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default MedicineTable;