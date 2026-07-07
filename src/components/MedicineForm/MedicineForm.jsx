import "./MedicineForm.css";

function MedicineForm() {
  return (
    <div className="card">

      <h2>Add Medicine</h2>

      <form>

        <div className="form-grid">

          <div className="form-group">
            <label>Medicine Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Expiry Date</label>
            <input type="date" />
          </div>

        </div>

        <div className="form-group">

          <label>Notes</label>

          <textarea rows="4"></textarea>

        </div>

        <button className="submit-btn">
          Add Medicine
        </button>

      </form>

    </div>
  );
}

export default MedicineForm;