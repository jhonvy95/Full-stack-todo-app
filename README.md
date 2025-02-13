# To-Do App

## Descripción

Esta es una aplicación de gestión de tareas (To-Do App) desarrollada con Angular en el frontend y .NET en el backend. Permite a los usuarios crear, editar, eliminar y filtrar tareas.

## Características

- **Creación de tareas** con título, descripción, fecha límite y estado.
- **Edición y eliminación de tareas**.
- **Filtrado de tareas** por título y estado.
- **Uso de Material UI** para una interfaz moderna.
- **Persistencia de datos** con una API en .NET.

## Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 16 o superior)
- [Angular CLI](https://angular.io/cli) (instalación recomendada: `npm install -g @angular/cli`)
- [ASP.NET Core SDK](https://dotnet.microsoft.com/) (versión 6.0 o superior)
- Base de datos SQL Server

## Instalación

### Frontend (Angular)

1. Clona el repositorio:

```sh
  git clone https://github.com/tu-usuario/todo-app.git
  cd todo-app-frontend
```

2. Instala las dependencias:

```sh
  npm install
```

3. Inicia el servidor de desarrollo:
   La aplicación estará disponible en http://localhost:4200/.

### Backend (.NET)

## Guía de inicio

1. Clonar el repositorio: Clona este repositorio en su máquina local usando git clone.
2. Configurar la base de datos: Configurar una base de datos SQLServer y actualizar la cadena de conexión en el archivo appsettings.json
3. Ejecutar migraciones: Ejecutar las migraciones de Entity Framework Core para crear el esquema de la base de datos.
4. Crear y ejecutar el proyecto: Crear y ejecutar el proyecto de API web de ASP.NET Core usando Visual Studio o la CLI de .NET.
5. Probar Endpoints: Usar herramientas como Postman o curl para probar los puntos de conexión de la API para el registro de usuarios, el inicio de sesión y las acciones de crear, editar , eliminar una tarea.

6. Navega al directorio del backend:

```sh

  cd todo-app-backend
```

2. Restaura las dependencias:

```sh

  dotnet restore
```

3. Configura la conexión a la base de datos en appsettings.json.

4. Ejecuta las migraciones y actualiza la base de datos:

```sh

  dotnet ef database update
```

5. Inicia el servidor backend:

```sh

  dotnet run
```

La API estará disponible en http://localhost:44306/.

## Tecnologías utilizadas

- **Frontend** :Angular, Angular Material, TypeScript ,SweetAlert2, Bootstrap
- **Backend** : .NET Core, Entity Framework Core, SQL Server, JWT Token Authentication, Dependency Injection, Repository Pattern, Identity Framework.
- **Estilos** : Bootstrap, Material

![Image](https://github.com/user-attachments/assets/686c363c-0e83-49d5-a0cc-946d7fd5b251)
![Image](https://github.com/user-attachments/assets/9a710e9e-3e8f-464b-a10a-baeef9e07eeb)
![Image](https://github.com/user-attachments/assets/f3744bf8-b4d8-4ea9-94b8-7ead99442f09)
![Image](https://github.com/user-attachments/assets/dfc40648-73d8-4ca7-8aa7-8690ed2d81a4)
