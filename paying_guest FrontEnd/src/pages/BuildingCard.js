import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pg_img from './assets/pg_img.png';

function BuildingCard() {
  const [buildingList, setBuildingList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8083/building/list');
        const data = await response.json();

        setBuildingList(data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/building/${id}`);
  };

  const rows = [];
  let currentRow = [];

  for (let i = 0; i < buildingList.length; i++) {
    currentRow.push(
      <div className="col-md-4" key={buildingList[i].buildings_id}>
        <div className="card mb-4">
          <img className="card-img-top" src={pg_img} alt={buildingList[i].buildings_id} />
          <div className="card-body">
            <h5 className="card-title">{buildingList[i].building_name}</h5>
            <p className="card-text">Authentication: {buildingList[i].address[1]}</p>
            <p className="card-text">Applicable for: {buildingList[i].applicable_for}</p>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleCardClick(buildingList[i].buildings_id)}>View Details</button>
          </div>
        </div>
      </div>
    );

    if (currentRow.length === 3 || i === buildingList.length - 1) {
      rows.push(
        <div className="row" key={i}>
          {currentRow}
        </div>
      );
      currentRow = [];
    }
  }

  return (
    <div className="card-deck">
      {rows}
    </div>
  );
}


export default BuildingCard