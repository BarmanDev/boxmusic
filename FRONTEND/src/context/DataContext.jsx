import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [Artist, setArtist] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);
  const URL_Delete = "http://localhost:3000/Artist";
  const URL = "http://localhost:3000/Artist";

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setArtist(data);
        setNeedsReload(false);
      } else {
        console.error("Error al obtener datos");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };
  const getArtist = async (Artist, URL) => {
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

  const postArtist = async (newArtist, URL, idArtist) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArtist),
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

  const updateArtist = (id, newData) => {
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
  

  const DeleteArtist = (id) => {
    fetch(`${URL_Delete}/${id}`, {
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
      fetchData("http://localhost:9000/docs");
    }
  }, [needsReload]);

  const value = {
    Artist,
    needsReload,
    fetchData,
    postArtist,
    DeleteArtist,
    updateArtist,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
