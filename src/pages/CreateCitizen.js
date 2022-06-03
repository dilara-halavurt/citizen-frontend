
import {useState} from "react";
import Citizen from "../model/Citizen";
import React from 'react';
import Input from "../bootstrap/Input";
import CheckBox from "../bootstrap/CheckBox";

const CreateCitizen = () => {
    const [childrenFields, setChildrenFields] = useState([
        { childName: '', childId: '' }
      ])
    const [citizen, setCitizen] = useState(new Citizen());
    function handleInputChange(event) {
        const {name, value} = event.target;
        let newCitizen = {...citizen};
        newCitizen[name] = value;

        setCitizen(newCitizen);
    }
    const handleChildrenChange = (index, event) => {
        let children = [...childrenFields];
        children[index][event.target.name] = event.target.value;
        setChildrenFields(children);
     }
     const handleChildrenIDChange = (index, event) => {
        let children = [...childrenFields];
        children[index][event.target.name] = parseInt(event.target.value);
        setChildrenFields(children);
     }
    const addFields = () => {
        let newfield = { childName: '', childId: '' }
        setChildrenFields([...childrenFields, newfield])
    }
    function createCitizen( ) {
        debugger;
        fetch('http://localhost:8080/citizen', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(citizen)
        }).then(response => response.json())
            .then(console.table);
    }
    const submit = () => {
        let newCitizen = {...citizen};
        debugger;
        newCitizen['children'] = childrenFields;
        
        setCitizen(newCitizen);
        citizen['children']= childrenFields;
        console.log(JSON.stringify(citizen))
        debugger;
        createCitizen();

    }
  return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Citizen</h4>
                    </div>
                    <div className="card-body">
                        <Input id="id"
                            handleChange={handleInputChange}
                            value={citizen.id}
                            label="ID"></Input>
                        <Input id="name"
                            handleChange={handleInputChange}
                            value={citizen.name}
                            label="FULL NAME"></Input>
                        <CheckBox id="drivingLiscense"
                            handleChange={handleInputChange}
                            value={citizen.hasDrivingLicense}
                            label="Has Driving Liscense"></CheckBox>
                        <CheckBox id="isCitizen"
                            handleChange={handleInputChange}
                            value={citizen.isCitizen}
                            label="Is Citizen"></CheckBox>
                        <form>
                            <p style={{fontSize: '24px'}}> <strong>Children </strong></p>
                            {childrenFields.map((input, index) => {
                                return (
                                <div key={index}>
                                    <Input
                                        id="childName"
                                        handleChange={event => handleChildrenChange(index, event)}
                                        value={citizen['children']['childName']}
                                        label="Name"></Input>
                                    <Input
                                        id="childId"
                                        handleChange={event => handleChildrenIDChange(index, event)}
                                        value={citizen['children']['childId']}
                                        label="ID"></Input>
                                </div>
                                )
                            })}
                        </form>
                            <button className="btn btn-secondary " onClick={addFields}>Add More..</button>
                            <button className="btn btn-primary " onClick={submit} >Submit</button>
                    </div>
                </div>
            </div>
  );
};
  
export default CreateCitizen;