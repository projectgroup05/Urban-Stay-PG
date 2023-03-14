import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const buildings = [
  {
    id: 1,
    name: "ABC Building",
    address: "123 Main Street",
    rent: 1000,
    deposit: 500,
    manager: "John Doe",
    acRooms: true,
    nonAcRooms: true,
    wifi: true,
    waterPurifier: true,
    refrigerator: true,
    washingMachine: true,
    foodFacility: true,
    sports: false,
    gym: false,
    parking: true,
  },
  // add more building objects here
];

function BuildingDetails() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  function handleCardClick(building) {
    setSelectedBuilding(building);
  }

  function handleBackClick() {
    setSelectedBuilding(null);
  }

  if (selectedBuilding) {
    return (
      <div>
        <h2>{selectedBuilding.name}</h2>
        <p>Address: {selectedBuilding.address}</p>
        <p>Rent: {selectedBuilding.rent}</p>
        <p>Deposit: {selectedBuilding.deposit}</p>
        <p>Manager: {selectedBuilding.manager}</p>
        <h4>Available Facilities:</h4>
        <ul>
          {selectedBuilding.acRooms && <li>AC Rooms available</li>}
          {selectedBuilding.nonAcRooms && <li>Non-AC Rooms available</li>}
          {selectedBuilding.wifi && <li>WiFi available</li>}
          {selectedBuilding.waterPurifier && <li>Water Purifier available</li>}
          {selectedBuilding.refrigerator && <li>Refrigerator available</li>}
          {selectedBuilding.washingMachine && <li>Washing Machine available</li>}
          {selectedBuilding.foodFacility && <li>Food Facility available</li>}
          {!selectedBuilding.sports && <li>Sports not available</li>}
          {!selectedBuilding.gym && <li>Gym not available</li>}
          {selectedBuilding.parking && <li>Parking available</li>}
        </ul>
        <Button variant="primary" onClick={handleBackClick}>
          Back to List
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2>Building List</h2>
      {buildings.map((building) => (
        <Card key={building.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{building.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {building.address}
            </Card.Subtitle>
            <Card.Text>Rent: {building.rent}</Card.Text>
            <Button variant="primary" onClick={() => handleCardClick(building)}>
              View Details
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BuildingDetails;
