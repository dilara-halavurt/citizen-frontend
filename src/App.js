import {useState} from "react";
import Citizen from "./model/Citizen";
import { useNavigate } from 'react-router-dom'
import isCitizen from "./pages/IsCitizen"
export default function App(props) {
    // citizen : state (react) -> Model (MVC) -> Resource (REST Architecture -> RESTful Service)
    const DEPARTMENTS = ["IT", "Sales", "Finance", "HR"];
    const navigate = useNavigate()
    //region action methods
    function isCitizen() {
      navigate("/isCitizen")
    }
    function getByName() {
      navigate("/getByName")
    }
    function getByChildren() {
      navigate("/getByChildren")
    }
    function getByDriversLiscence() {
      navigate("/getByDriversLiscence")
    }
    function getAll() {
      navigate("/getAll")
    }
    function getById() {
      navigate("/getById")
    }
    function addCitizen() {
      navigate("/addCitizen")
    }
    function updateCitizen() {
      navigate("/updateCitizen")
    }

    //endregion

    return (
      <div className="container">
          <div className="card">
              <div className="card-header">
                  <h4 className="card-title">Citizens</h4>
              </div>
              <div className="card-body">

                  <div className="input-group">
                      <button className="btn btn-success"
                              onClick={isCitizen}>Filter by citizenship
                      </button>
                      <button className="btn btn-danger"
                              onClick={getByName}>Filter by name
                      </button>
                      <button className="btn btn-warning"
                              onClick={getByChildren}>Filter by children
                      </button>
                      <button className="btn btn-danger"
                              onClick={getByDriversLiscence}>Filter by drivers liscence
                      </button>
                      <button className="btn btn-warning"
                              onClick={getAll}>Retrieve All
                      </button>
                      <button className="btn btn-danger"
                              onClick={getById}>Get by citizen id
                      </button>
                      <button className="btn btn-warning"
                              onClick={addCitizen}>Create Citizen
                      </button>
                      <button className="btn btn-warning"
                              onClick={updateCitizen}>Update Citizen
                      </button>
                  </div>
              </div>
          </div>
          <p></p>

      </div>
  );
};