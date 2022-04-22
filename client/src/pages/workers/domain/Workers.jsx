import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardWorkers from "../../../components/Workers/CardWorkers/CardWorkers";
import '../../workers/domain/workers.css'


const Workers = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/items").then((res) => {
      setProfile(res.data);
    });
  }, []);
  
  return profile.map(({id, name, ubication, profile, description, price}) => (
    <div className="w-center-card">
      <CardWorkers
        key={id}
        name={name}
        ubication={ubication}
        profile={profile}
        description={description}
        price={price}
      />
    </div>
  ));
};

export default Workers;
