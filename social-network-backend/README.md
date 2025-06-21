# 🌐 Red Social - Arquitectura de Microservicios

Este proyecto es una red social simple construida con una arquitectura de **microservicios**. Cada servicio está desacoplado y cumple con una función específica dentro del ecosistema. Los servicios se comunican entre sí mediante REST API y comparten una base de datos PostgreSQL.

---

## 🧱 Microservicios

El sistema está dividido en los siguientes servicios:

| Servicio         | Descripción                                            | Puerto |
|------------------|--------------------------------------------------------|--------|
| **Auth Service** | Registro, inicio de sesión y generación de tokens JWT | `3001` |
| **Post Service** | Gestión de publicaciones y likes                      | `3002` |
| **User Service** | Perfil y listado de usuarios registrados              | `3003` |

---

## 📁 Estructura del Proyecto

social-network-backend/
├── auth-service/
├── post-service/
├── user-service/
├── docker-compose.yml
└── README.md

Cada carpeta contiene su propio microservicio con su código fuente, dependencias y documentación.

# Ejecutar con Docker Compose
El proyecto incluye un archivo docker-compose.yml para levantar todos los servicios junto con la base de datos:

# Requisitos Previos
 - Docker
 - Docker Compose

# Comando para levantar los servicios

docker-compose up --build
Esto hará lo siguiente:

Construirá las imágenes de cada microservicio (auth, post, user)
Iniciará una base de datos PostgreSQL
Ejecutará los servicios conectados a la misma red interna

# Verificar los servicios
Una vez levantados:

Auth: http://localhost:3001/api-docs

Posts: http://localhost:3002/api-docs

Users: http://localhost:3003/api-docs

# Ejecutar pruebas unitarias
Cada microservicio incluye pruebas unitarias con Jest. Para ejecutarlas:

 - cd auth-service
 - npm install
 - npm test

Repite este paso para post-service y user-service.

# Autenticación
Los servicios están protegidos mediante JWT.

Se debe registrar un usuario con auth-service y utilizar el token recibido para acceder a los endpoints protegidos de post-service y user-service.

# Variables de Entorno
Cada microservicio lee las variables desde .env. Si ejecutas localmente sin Docker, asegúrate de tener .env configurado en cada servicio con las siguientes claves:

 - DB_HOST=localhost
 - DB_PORT=5432
 - DB_USER=postgres
 - DB_PASSWORD=yourpassword
 - DB_DATABASE=social_network
 - JWT_SECRET=your_jwt_secret

Cuando usas Docker, estos valores son definidos automáticamente en docker-compose.yml.

# Contribuciones
¡Las contribuciones son bienvenidas! Puedes abrir un issue o enviar un pull request con mejoras, sugerencias o correcciones.