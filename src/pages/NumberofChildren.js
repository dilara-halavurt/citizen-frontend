
import {useState} from "react";
import Citizen from "../model/Citizen";
import React from 'react';
import Input from "../bootstrap/Input";
import CheckBox from "../bootstrap/CheckBox";

const NumberOfChildren = () => {
    const [citizen, setCitizen] = useState(new Citizen());
    const [citizens, setCitizens] = useState([]);
    const [numberOfChildren, setNumberOfChildren] = useState(0);
    function getByNumberOfChildren() {
        fetch(`http://localhost:8080/citizen/numberOfChildren/${numberOfChildren}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        }).then(response => response.json())
            .then(ctzs => setCitizens(ctzs));
    }
    function submit() {
        getByNumberOfChildren(numberOfChildren)
    }
    function handleInputChange(event) {
        const {name, value} = event.target;
        setNumberOfChildren(value);
    }
  return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Citizens</h4>
                </div>
                <div className="card-body">
                <Input      id="numberOfChildren"
                            handleChange={handleInputChange}
                            label="Number of children"></Input>
                    <table className="table table-bordered table-hover table-striped table-responsive">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Is Citizen</th>
                            <th>Driving Liscense</th>
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
    
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <button className="btn btn-primary " onClick={submit} >Submit</button>
                </div>
            </div>
  );
};
  
export default NumberOfChildren;