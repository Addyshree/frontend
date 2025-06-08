import React from "react";

function ParcelList({ parcels, onDelete }) {
  return (
    <div>
      <h2>Parcels</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Size</th>
            <th>Tracking #</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel.id}>
              <td>{parcel.customerName}</td>
              <td>{parcel.deliveryAddress}</td>
              <td>{parcel.contactNumber}</td>
              <td>{parcel.parcelSize}</td>
              <td>{parcel.trackingNumber}</td>
              <td>
                <button onClick={() => onDelete(parcel.id)}>Delete</button>
                {/* Optionally add Edit button */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParcelList;
