import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParcelForm from './components/ParcelForm';
import ParcelList from './components/ParcelList';

function App() {
  const [parcels, setParcels] = useState([]);

  const fetchParcels = async () => {
    const res = await axios.get('http://localhost:5000/parcels');
    setParcels(res.data);
  };

  useEffect(() => {
    fetchParcels();
  }, []);

  const addParcel = async (parcel) => {
    const res = await axios.post('https://localhost:5173/parcels', parcel);
    setParcels([...parcels, res.data]);
  };

  const deleteParcel = async (id) => {
    await axios.delete("https://localhost:5173/parcels/${id}");
    setParcels(parcels.filter(p => p.id !== id));
  };

  return (
    <div className="container">
      <h1>Parcel Management</h1>
      <ParcelForm onSubmit={addParcel} />
      <ParcelList parcels={parcels} onDelete={deleteParcel} />
    </div>
  );
}

export default App;


