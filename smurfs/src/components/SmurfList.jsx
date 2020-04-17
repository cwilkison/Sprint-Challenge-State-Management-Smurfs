import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import Smurf from "./Smurf";

const Smurfs = () => {
  const { smurfs } = useContext(SmurfContext);
  return (
    <div className="smurfs-container">
        {smurfs.map(smurf => (
          <Smurf 
          key={smurf.id} 
          smurfs={smurf} 
          />
        ))}
    </div>
  );
}

export default Smurfs;