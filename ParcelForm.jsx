import React, { useState } from "react";

function ParcelForm({ onSubmit }) {
  const [parcel, setParcel] = useState({
    customerName: "",
    deliveryAddress: "",
    contactNumber: "",
    parcelSize: "",
    trackingNumber: "",
  });

  const handleChange = (e) => {
    setParcel({ ...parcel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parcel);
    setParcel({
      customerName: "",
      deliveryAddress: "",
      contactNumber: "",
      parcelSize: "",
      trackingNumber: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="customerName"
        value={parcel.customerName}
        onChange={handleChange}
        placeholder="Customer Name"
      />
      <input
        name="deliveryAddress"
        value={parcel.deliveryAddress}
        onChange={handleChange}
        placeholder="Delivery Address"
      />
      <input
        name="contactNumber"
        value={parcel.contactNumber}
        onChange={handleChange}
        placeholder="Contact Number"
      />
      <input
        name="parcelSize"
        value={parcel.parcelSize}
        onChange={handleChange}
        placeholder="Parcel Size"
      />
      <input
        name="trackingNumber"
        value={parcel.trackingNumber}
        onChange={handleChange}
        placeholder="Tracking Number"
      />
      <button type="submit">Create Parcel</button>
    </form>
  );
}

export default ParcelForm;
