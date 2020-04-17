import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const changeHandler = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    axios
    .post("http://localhost:3333/smurfs", data)
    .then( res => {})
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <form onSubmit={submitForm}>
      <label>Name:
      <input
        name="name"
        type="text"
        value={data.name}
        onChange={changeHandler}
      />
       </label>
      <label>Age:
      <input
        name="age"
        type="text"
        value={data.age}
        onChange={changeHandler}
      />
      </label>
      <label>Height:
      <input
        type="text"
        name="height"
        value={data.height}
        onChange={changeHandler}
      />
      </label>
      <button type="submit">Add Smurf</button>
    </form>
  );
};

export default Form;