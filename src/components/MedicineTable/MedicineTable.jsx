import "./MedicineTable.css";

const medicines = [
  {
    id:1,
    fullName:"Paracetamol",
    brand:"Cipla",
    price:25,
    quantity:20,
    expiry:"20-Feb-2027"
  },
  {
    id:2,
    fullName:"Dolo 650",
    brand:"Micro Labs",
    price:40,
    quantity:5,
    expiry:"15-Dec-2026"
  }
];

function MedicineTable(){

return(

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

{medicines.map((medicine)=>(

<tr key={medicine.id}>

<td>{medicine.fullName}</td>

<td>{medicine.brand}</td>

<td>₹{medicine.price}</td>

<td>{medicine.quantity}</td>

<td>{medicine.expiry}</td>

</tr>

))}

</tbody>

</table>

)

}

export default MedicineTable;