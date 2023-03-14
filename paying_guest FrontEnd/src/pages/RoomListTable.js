import React from 'react'

function RoomListTable(props) {
  return (
    <div>
        <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                {props.buildingsarr.map((building, index) => (
                    <tr key={building.buildingId}>
                        <td>{building.buildingId}</td>
                        <td>{building.buildingName}</td>
                        <td>{building.address.city}</td>
                        <td>{building.address.landmark}</td>
                        <td>{building.address.pincode}</td>
                        <td>{building.managerDto.contactNo}</td>
                        <td>{building.managerDto.emailId}</td>
                        <td>{building.managerDto.fullName}</td>
                        <td>{building.onwerList}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
    </div>
  )
}

export default RoomListTable