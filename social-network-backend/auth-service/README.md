# Auth Service

Este servicio es responsable de la autenticación de usuarios en la red social. Proporciona funcionalidades para el registro y el inicio de sesión de usuarios, utilizando JSON Web Tokens (JWT) para la gestión de sesiones.

## Estructura del Proyecto

- **src/**: Contiene el código fuente del servicio.
  - **controllers/**: Controladores que manejan las solicitudes HTTP.
    - `authController.ts`: Controlador para la autenticación de usuarios.
  - **models/**: Modelos que representan la estructura de los datos.
    - `user.ts`: Modelo que define la estructura de los datos del usuario.
  - **routes/**: Rutas del servicio.
    - `authRoutes.ts`: Rutas relacionadas con la autenticación.
  - **services/**: Lógica de negocio del servicio.
    - `authService.ts`: Servicio que maneja la lógica de autenticación.
  - **middlewares/**: Middleware para la gestión de solicitudes.
    - `authMiddleware.ts`: Middleware que verifica la validez del token JWT.
  - **utils/**: Utilidades del servicio.
    - `jwt.ts`: Funciones para generar y verificar tokens JWT.
  - `index.ts`: Punto de entrada del servicio.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   cd social-network-backend/auth-service
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Configura la base de datos en el archivo de configuración (si es necesario).

4. Inicia el servicio:
   ```
   npm start
   ```

## Endpoints

- **POST /auth/register**: Registra un nuevo usuario.
- **POST /auth/login**: Inicia sesión y devuelve un token JWT.
- **GET /auth/profile**: Obtiene el perfil del usuario autenticado (requiere token).

## Docker

Este servicio se puede ejecutar en un contenedor Docker. Para construir y ejecutar el contenedor, utiliza el siguiente comando:

```
docker build -t auth-service .
docker run -p 3000:3000 auth-service
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.