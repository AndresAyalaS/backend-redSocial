# Post Service

Este directorio contiene la implementación del Servicio de Publicaciones para la aplicación de red social. Este servicio es responsable de gestionar las publicaciones de los usuarios, incluyendo la creación, recuperación de publicaciones y gestión de likes.

## Estructura del Proyecto

- **src/**: Contiene el código fuente del servicio.
  - **controllers/**: Controladores que manejan las solicitudes HTTP. 
    - `postController.ts` which handles incoming requests related to posts.
  - **models/**: Contiene el modelo `post.ts` que define la estructura de una publicación en la base de datos.
  - **routes/**: Contiene `postRoutes.ts` donde se definen las rutas para operaciones relacionadas con publicaciones.
  - **services/**: Contiene `postService.ts` con la lógica de negocio para gestionar publicaciones.
  - **middlewares/**: Contiene `errorHandler.ts` middleware para el manejo de errores.
  - **utils/**: Contiene funciones utilitarias relacionadas con publicaciones.
  - **index.ts**: Punto de entrada del servicio, donde se configura el servidor Express.

## API Endpoints

- **POST /posts**: Crear una nueva publicación.
- **GET /posts**: Obtener la lista de todas las publicaciones.
- **POST /posts/:id/like**: Dar like a una publicación específica.
- **GET /posts/user/:id/**: Obtener todas las publicaciones de un usuario específico por su ID.

## Database

El servicio utiliza PostgreSQL como base de datos. La tabla `post` se define en los scripts de migración ubicados en el archivo `database/migrations/init.sql`

## Docker

Se proporciona un Dockerfile para contenerizar el servicio. Usa los siguientes comandos para construir e iniciar el servicio:

```bash
docker build -t post-service .
docker run -p 3000:3000 post-service
```

## Installation

Para instalar las dependencias necesarias, ejecuta:

```bash
npm install
```

## Running the Service

Para iniciar el servicio de publicaciones, ejecuta:

```bash
npm start
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.