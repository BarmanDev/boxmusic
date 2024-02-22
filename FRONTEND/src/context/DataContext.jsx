import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);
  const URL_Delete = "http://localhost:3000/api/v1/artists";
  const URL = "http://localhost:3000/api/v1/artists";

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setArtists(data);
        setNeedsReload(false);
      } else {
        console.error("Error al obtener datos");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };
  const getartists = async (artists, URL) => {
    try {
      const response = await fetch(`${URL}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Obtenido", data);
      } else {
        console.error("Error al obtener");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const postartists = async (newArtists, URL, id_artist) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArtists),
      };

      const response = await fetch(URL, options);
      
      if (response.ok) {
        setArtist([]);
        setNeedsReload(true);
        alert("Realizado con éxito");
      } else {
        alert("Error al realizar la operación");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const updateArtists = (id_artist, newData) => {
    fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(() => {
        console.log("Documento actualizado con éxito");
        setNeedsReload(true);
      })
      .catch((error) => {
        console.error("Error al actualizar el documento", error);
      });
  };
  

  const DeleteArtists = (id_artists) => {
    fetch(`${URL_Delete}/${id_artists}`, {
      method: "DELETE",
    })
      .then(() => {
        setNeedsReload(true);
      })
      .catch((error) => {
        console.error("Error al borrar", error);
      });
  };


  useEffect(() => {
    if (needsReload) {
      fetchData("http://localhost:3000/artists");
    }
  }, [needsReload]);

  const value = {
    artists,
    needsReload,
    getartists,
    fetchData,
    postartists,
    DeleteArtists,
    updateArtists,
    searchArtists,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
