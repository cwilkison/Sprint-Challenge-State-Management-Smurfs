import React from 'react'

const Smurf = (props) => {

    return (
        <div>
            <p>Name: {props.smurfs.name}</p>
            <p>Age: {props.smurfs.age}</p>
            <p>Height: {props.smurfs.height}</p>
        </div>
    );
};

export default Smurf;