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
