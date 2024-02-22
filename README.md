# BOX-MUSIC-FRONTEND

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# BOX-MUSIC-BACKEND

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# BOX-MUSIC-BACKEND

#Repositorio que contiene el backend del proyecto box-music

## Instalación del proyecto


Instalar dependencias del servidor.

```sh
npm install
```

Ejecutar el servidor 

```sh
node index.js
```

## Uso en Postman

## ARTITS

### GET - ALL ARTITS

Obtiene todos los artista de la base de datos 

```sh
http://localhost:3000/api/v1/artists
```

### GET - ARTITS BY ID 

Obtiene el artista por id

```sh
http://localhost:3000/api/v1/artists/1
```

### DELETE - ARTITS

Elimina un artista insertando el id del artista

```sh
http://localhost:3000/api/v1/artists/1
```

### POST - ARTITS

Crea un nuevo artista 

```sh
http://localhost:3000/api/v1/artists
```

Hay que insertar un JSON para esta petición.

```json
{
  "name": "Nuevo Artista",
  "bio": "Biografía del nuevo artista",
  "contact": "Contacto del nuevo artista",
  "service_id": 1
}

```
## CONTACT


### GET - ALL CONTACT

Obtiene todos los contactos de la base de datos 

```sh
http://localhost:3000/api/v1/contacts
```

### GET - CONTACT BY ID 

Obtiene el contacto por id

```sh
http://localhost:3000/api/v1/contacts/1
```

### DELETE - CONTACT

Elimina un contacto insertando el id del contacto

```sh
http://localhost:3000/api/v1/contacts/2
```

### POST - CONTACT

Crea un nuevo contacto 

```sh
http://localhost:3000/api/v1/contacts
```

Hay que insertar un JSON para esta petición.

```json
    {
        "id_contact": 8,
        "youtube": "https://www.youtube.com/",
        "instagram": "https://www.instagram.com/",
        "phone": "555-123-4567",
        "email": "ana.garcia@correo.com",
        "artist_id": 1
    }

```
