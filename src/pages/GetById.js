
import {useState} from "react";
import Citizen from "../model/Citizen";
import React from 'react';
import Input from "../bootstrap/Input";
import CheckBox from "../bootstrap/CheckBox";

const GetById = () => {
    const [citizen, setCitizen] = useState(new Citizen());
    
    function getCitizensById() {
         
        fetch(` https://citizen-d14-back.herokuapp.com/citizen/byId/${citizen.id}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        }).then(response => response.json())
            .then(ctzs => setCitizen(ctzs));
    }
    function submit() {
         
        getCitizensById(citizen.id)
    }
    function handleInputChange(event) {
        const {name, value} = event.target;
        let newCitizen = {...citizen};
        newCitizen[name] = value;
        setCitizen(newCitizen);
         
    }
  return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Citizens</h4>
                </div>
                <div className="card-body">
                <Input      id="id"
                            handleChange={handleInputChange}
                            value={citizen.id}
                            label="ID"></Input>
                    <table className="table table-bordered table-hover table-striped table-responsive">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Full Name</th>
                            <th>Is Citizen</th>
                            <th>Driving Liscense</th>
                            <th>Children</th>
                        </tr>
                        </thead>
                        <tbody>
                            <td>{citizen.id}</td>
                            <td>{citizen.name}</td>
                            <td>{citizen.isCitizen  ? 'YES' : 'NO'}</td>
                            <td>{citizen.hasDrivingLicense ? 'YES' : 'NO'}</td>
                            <td>{JSON.stringify(citizen.children)}</td>
                        </tbody>
                    </table>
                    <button className="btn btn-primary " onClick={submit} >Submit</button>
                </div>
            </div>
  );
};
  
export default GetById;