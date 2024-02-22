import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormArtist = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to your PHP file
    fetch("http://localhost:3000/action.php", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Display the form data
        alert(
          `Form submitted successfully!\n\n${JSON.stringify(formData, null, 2)}`
        );
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting the form.");
      });
  };

  return (
    <div className="container w-50 m-auto">
      <div className="text">
        <h1 className="text-center">Contacto</h1>
        <hr className="w-25 m-auto bg-dark" />
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="user my-4">
          <label htmlFor="username">Nombre: </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="gender my-4">
          <label htmlFor="gender">Genero: </label>
          <input
            type="text"
            name="gender"
            id="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">Correo: </label>
          <input
            type="email"
            name="email"
            id="email"
            className="email form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="address my-4">
          <label htmlFor="address">Biografia: </label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="address my-4">
          <label htmlFor="address">Canciones: </label>
          <input
            type="file"
            name="canciones"
            id="canciones"
            className="form-control"
            accept=".mp4"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success float-end">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormArtist;
