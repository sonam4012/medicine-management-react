import { useState } from "react";
import "./MedicineForm.css";

function MedicineForm({ medicines, setMedicines }) {
  const [formData, setFormData] = useState({
    fullName: "",
    brand: "",
    price: "",
    quantity: "",
    expiry: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.brand ||
      !formData.price ||
      !formData.quantity ||
      !formData.expiry
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newMedicine = {
      id: Date.now(),
      ...formData,
    };

    setMedicines([...medicines, newMedicine]);

    setFormData({
      fullName: "",
      brand: "",
      price: "",
      quantity: "",
      expiry: "",
    });
  };

  return (
    <div className="card">
      <h2>Add Medicine</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Medicine Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter medicine name"
            />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter brand name"
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
            />
          </div>

          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="date"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Medicine
        </button>
      </form>
    </div>
  );
}

export default MedicineForm;