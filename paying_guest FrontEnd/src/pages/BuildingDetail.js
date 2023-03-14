import React from 'react'
import { useParams } from 'react-router-dom';
import RoomListTable from './RoomListTable';
//import { BuildingArray } from '../BuildingArray';

const BuildingArray= [
  {
      "buildingId": 1,
      "buildingName": "shobha",
      "address": {
          "city": "JAIPUR",
          "landmark": "mithai",
          "pincode": 402609,
          "areaName": null,
          "street": null,
          "district": null,
          "state": null
      },
      "applicableFor": "MALE",
      "managerDto": {
          "contactNo": 9749300966,
          "emailId": "akshah@gmail.com",
          "id": 45,
          "address": {
              "city": "JAIPUR",
              "landmark": "mithai",
              "pincode": 402609,
              "areaName": null,
              "street": null,
              "district": null,
              "state": null
          },
          "fullName": "shobha raika",
          "buildingId": 1
      },
      "RoomList": [],
      "onwerList": 'Harshit'
  },
  {
      "buildingId": 2,
      "buildingName": "saubhagya",
      "address": {
          "city": "JAIPUR",
          "landmark": "mithai",
          "pincode": 402609,
          "areaName": null,
          "street": null,
          "district": null,
          "state": null
      },
      "applicableFor": "FEMALE",
      "managerDto": {
          "contactNo": 9799300966,
          "emailId": "priya@gmail.com",
          "id": 43,
          "address": {
              "city": "JAIPUR",
              "landmark": "mithai",
              "pincode": 402609,
              "areaName": null,
              "street": null,
              "district": null,
              "state": null
          },
          "fullName": "priya raika",
          "buildingId": 2
      },
      "RoomList": [
                    {room_no : 101,
                    diposit_amount : 500.00,
                    notice_period: 3,
                    rent : 22.5,
                    room_avilabllity : true,
                    no_of_peopleSharingRoom : 2,
                    buildingId:6 
                    },
                    {room_no : 103,
                    diposit_amount : 500.00,
                    notice_period: 3,
                    rent : 22.5,
                    room_avilabllity : true,
                    no_of_peopleSharingRoom : 3,
                    buildingId:2
                    }
      ],
      "onwerList": 'Hritik'
  },
  {
      "buildingId": 8,
      "buildingName": "sneha",
      "address": {
          "city": "JAIPUR",
          "landmark": "mithai",
          "pincode": 402609,
          "areaName": null,
          "street": null,
          "district": null,
          "state": null
      },
      "applicableFor": "FEMALE",
      "managerDto": {
          "contactNo": 1019310966,
          "emailId": "sneha@gmail.com",
          "id": 70,
          "address": {
              "city": "JAIPUR",
              "landmark": "mithai",
              "pincode": 402609,
              "areaName": null,
              "street": null,
              "district": null,
              "state": null
          },
          "fullName": "sneha raika",
          "buildingId": 8
      },
      "RoomList": [],
      "onwerList": 'Adil'
  },
  {
      "buildingId": 4,
      "buildingName": "lina",
      "address": {
          "city": "JAIPUR",
          "landmark": "mithai",
          "pincode": 402609,
          "areaName": null,
          "street": null,
          "district": null,
          "state": null
      },
      "applicableFor": "MALE",
      "managerDto": {
          "contactNo": 1099310966,
          "emailId": "lina@gmail.com",
          "id": 68,
          "address": {
              "city": "JAIPUR",
              "landmark": "mithai",
              "pincode": 402609,
              "areaName": null,
              "street": null,
              "district": null,
              "state": null
          },
          "fullName": "lina raika",
          "buildingId": 4
      },
        "RoomList": [{room_no : 101,
                      diposit_amount : 500.00,
                      notice_period: 3,
                      rent : 22.5,
                      room_avilabllity : true,
                      no_of_peopleSharingRoom : 2,
                      buildingId:6  
                    },
                    {room_no : 103,
                    diposit_amount : 500.00,
                    notice_period: 3,
                    rent : 22.5,
                    room_avilabllity : true,
                    no_of_peopleSharingRoom : 3,
                    buildingId:6 
                    }],
      "onwerList": 'Smitesh'
  },
  {
      "buildingId": 6,
      "buildingName": "neha",
      "address": {
          "city": "JAIPUR",
          "landmark": "mithai",
          "pincode": 402609,
          "areaName": null,
          "street": null,
          "district": null,
          "state": null
      },
      "applicableFor": "FEMALE",
      "managerDto": {
          "contactNo": 1009310966,
          "emailId": "neha@gmail.com",
          "id": 69,
          "address": {
              "city": "JAIPUR",
              "landmark": "mithai",
              "pincode": 402609,
              "areaName": null,
              "street": null,
              "district": null,
              "state": null
          },
          "fullName": "neha raika",
          "buildingId": 6
      },
      "RoomList": [{room_no : 101,
                    diposit_amount : 500.00,
                    notice_period: 3,
                    rent : 22.5,
                    room_avilabllity : true,
                    no_of_peopleSharingRoom : 2,
                    buildingId:6 
                    },
                    {room_no : 103,
                    diposit_amount : 500.00,
                    notice_period: 3,
                    rent : 22.5,
                    room_avilabllity : true,
                    no_of_peopleSharingRoom : 3,
                    buildingId:6
                    }],
      "onwerList": 'Dinesh'
  }
];

function getBuildingById(buildingIdToFind) {
  const buildings = BuildingArray.find(({b}) => b.buildingId = buildingIdToFind);

  console.log(buildings);
  return buildings;
}


function BuildingDetail() {
  
  const { id } = useParams();
  const buildingIdToFind = id;
  const buildings = getBuildingById(buildingIdToFind);
console.log();
  return (
      <div>
        <img src={'https://bookmypg.co.in/assets/front/images/city-slider.png'} className="img-fluid mb-5" alt='UJ'></img>

          <div className='container-fluid'>
          <div className="row">
          <div className='col-md-4'>
              <figure className="figure">
                  <img src="https://www.getsethome.com/assets/img/no-broker-mumbai/PRT555/room-on-rent-in-mumbai/pg-in-santacruz-east.jpg" className="figure-img img-fluid rounded" alt="..." />
              <figcaption className="figure-caption">Sample Room Photo.</figcaption>
            </figure>
          </div>
            <div className='col-md-8'>
              <h1 className="display-3">id:-{id}</h1>
              <h2>
                <RoomListTable buildingsarr={BuildingArray}/>
              </h2>
            </div>
          </div>
     {     console.log("Room Detail"+id)}
        Room Details {id} 
   
        </div>
        
      
      
      </div>
  );
}

export default BuildingDetail