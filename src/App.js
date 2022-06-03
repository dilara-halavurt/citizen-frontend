import {useState} from "react";
import Citizen from "./model/Citizen";
import { useNavigate } from 'react-router-dom'
import isCitizen from "./pages/IsCitizen"
export default function App(props) {
    // citizen : state (react) -> Model (MVC) -> Resource (REST Architecture -> RESTful Service)
    const DEPARTMENTS = ["IT", "Sales", "Finance", "HR"];
    //psql --host=ec2-34-246-227-219.eu-west-1.compute.amazonaws.com --port=5432 --username=dbbbvzlqdjqhtg --password --dbname=d59cvesun43255
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
    function getByDrivingLiscense() {
      navigate("/getByDrivingLiscense")
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
                      <button className="btn btn-primary"
                              onClick={isCitizen}>Filter by citizenship
                      </button>
                      <button className="btn btn-secondary"
                              onClick={getByName}>Filter by name
                      </button>
                      <button className="btn btn-primary"
                              onClick={getByChildren}>Filter by children
                      </button>
                      <button className="btn btn-secondary"
                              onClick={getByDrivingLiscense}>Filter by driving liscense
                      </button>
                      <button className="btn btn-primary"
                              onClick={getAll}>Retrieve All
                      </button>
                      <button className="btn btn-secondary"
                              onClick={getById}>Get by citizen id
                      </button>
                      <button className="btn btn-primary"
                              onClick={addCitizen}>Create Citizen
                      </button>
                      <button className="btn btn-secondary"
                              onClick={updateCitizen}>Update Citizen
                      </button>
                  </div>
              </div>
          </div>
          <p></p>

      </div>
  );
};