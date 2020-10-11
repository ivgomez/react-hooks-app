import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    //console.log("email has changed");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <div className="form-group"></div>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <div />
        <div className="form-group"></div>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****"
          value={password}
          onChange={handleInputChange}
        />
        <div />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};
