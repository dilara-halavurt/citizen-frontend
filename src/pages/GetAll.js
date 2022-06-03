
import {useState} from "react";
import Citizen from "../model/Citizen";
import React from 'react';
import Input from "../bootstrap/Input";
import CheckBox from "../bootstrap/CheckBox";

const GetAll = () => {
    const [citizens, setCitizens] = useState([]);
    const [citizen, setCitizen] = useState(new Citizen());
    retrieveCitizens()
    function retrieveCitizens() {
        fetch('http://localhost:8080/citizen', {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        }).then(response => response.json())
            .then(ctzs => setCitizens(ctzs));
    }
  return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Citizens</h4>
                </div>
                <div className="card-body">
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
  
export default GetAll;