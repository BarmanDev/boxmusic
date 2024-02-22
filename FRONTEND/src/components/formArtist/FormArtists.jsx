import { useState } from "react";
import "./FormArtist.css";

const ArtistForm = () => {
  const [formData, setFormData] = useState({
    urlFoto: "",
    nombre: "",
    generoMusical: "",
    bio: "",
    telefono: "",
    email: "",
    instagram: "",
    youtube: "",
    mp3s: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor
    console.log(formData);
  };

  return (
    <main className="mainForm">
    <div className="form">
      <h1 className="form__title">Formulario de Artista</h1>
      <form className="formContainer" onSubmit={handleSubmit}>
      <h1 className="for__title">Formulario de Artista</h1>
        <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="urlFoto">URL de la Foto:</label>
        <input
        className="formContainer__input"
          type="url"
         
          id="urlFoto"
          name="urlFoto"
          value={formData.urlFoto}
          onChange={handleChange}
          required
        />
        </div>
        <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="nombre">Nombre:</label>
        <input
        className="formContainer__input"
          type="text"
          
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        </div>
        <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="generoMusical">Género Musical:</label>
        <input
        className="formContainer__input"
          type="text"
          
          id="generoMusical"
          name="generoMusical"
          value={formData.generoMusical}
          onChange={handleChange}
          required
        />
        </div>
        <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="bio">Biografía:</label>
        <textarea
        className="formContainer__input"
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows="4"
          required
        />
        </div>
       <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="telefono">Teléfono:</label>
        <input
        className="formContainer__input"
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        </div>
        <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="email">Correo Electrónico:</label>
        <input
        className="formContainer__input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
         <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="instagram">Instagram:</label>
        <input
        className="formContainer__input"
          type="text"
          id="instagram"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
        />
        </div>
       <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="youtube">YouTube:</label>
        <input
        className="formContainer__input"
          type="text"
          id="youtube"
          name="youtube"
          value={formData.youtube}
          onChange={handleChange}
        />
        </div>
        <div className="formContainer__item">
        <label className="formContainer__label" htmlFor="mp3s">Añadir MP3s:</label>
        <input className="formContainer__input"
          type="file"
          id="mp3s"
          name="mp3s"
          accept=".mp3"
          onChange={handleFileChange}
          multiple
        />
        </div>

        <input className="formContainer__button" type="submit" value="Enviar" />
      </form>
    </div>
    </main>
  );
};

export default ArtistForm;
