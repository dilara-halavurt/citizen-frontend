
import {useState} from "react";
import Citizen from "../model/Citizen";
import React from 'react';
import Input from "../bootstrap/Input";
import CheckBox from "../bootstrap/CheckBox";

const DrivingLiscense = () => {
    const [checked, setChecked] = useState(false);
    const [citizens, setCitizens] = useState([]);
    const handleClick = () => setChecked(!checked)
    const [citizen, setCitizen] = useState(new Citizen());

    function getAllCitizen() {
        fetch(' https://citizen-d14-back.herokuapp.com/citizen/hasDriversLiscense', {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        }).then(response => response.json())
            .then(ctzs => setCitizens(ctzs));
    }
    const submit = () => {
        if(checked){
            getAllCitizen()
        }
        
    }
  return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Citizen</h4>
                    </div>
                    <div className="card-body">
                        <CheckBox id="isCitizen"
                            handleChange={handleClick}
                            label="Has Drivers Liscense"></CheckBox>
                            <button className="btn btn-primary " onClick={submit} >Submit</button>
                    </div>
                    <table className="table table-bordered table-hover table-striped table-responsive">
                        <thead>
                        <tr>
                        <th>ID</th>
                            <th>id</th>
                            <th>Full Name</th>
                            <th>Is Citizen</th>
                            <th>Driving Liscense</th>
                            <th>Children</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                        citizens.map((ctz, idx) =>
                                <tr key={ctz.identityNo} onClick={() => setCitizen(ctz)}>
                                    <td>{idx + 1}</td>
                                    <td>{ctz.id}</td>
                                    <td>{ctz.name}</td>
                                    <td>{ctz.isCitizen  ? 'YES' : 'NO'}</td>
                                    <td>{ctz.hasDrivingLicense ? 'YES' : 'NO'}</td>
                                    <td>{JSON.stringify(ctz.children)}</td>
    
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
  );
};
  
export default DrivingLiscense;