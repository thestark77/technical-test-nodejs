# Prueba Técnica para Desarrollador Senior en Node.js con Express

## Introducción
Esta prueba tiene como objetivo evaluar tus habilidades prácticas en Node.js con Express. Se espera que desarrolles una solución que siga buenas prácticas, incluya validaciones, y demuestre tu experiencia en el manejo de APIs RESTful.

Tienes **2 horas** para completar la prueba. Asegúrate de documentar claramente cómo ejecutar tu aplicación y cualquier otra consideración que debamos tener en cuenta al evaluarla.

---

## Contexto
Estás desarrollando una API para gestionar un sistema de tareas (To-Do List). Los usuarios pueden:
1. Clona el siguiente repo en tu máquina: https://github.com/IT-Bemovil/technical-test-nodejs.git
2. Crea una rama con tu nombre usando KEBABCASE ejemplo: **brian-maya**
3. Crear una cuenta y autenticarse.
4. Crear, leer, actualizar y eliminar tareas.
5. Marcar tareas como completadas o pendientes.
6. **Realiza varios commits a medida que vayas avanzando en el desarrollo de la prueba**

## Requerimientos Técnicos

### 1. Configuración Básica
- Usa **Node.js** y **Express**.
- La base de datos será **SQLite** para simplicidad, usando **Sequelize** como ORM.
- Utiliza **ES Modules** (`import/export`).
- Usa **JWT** para autenticar usuarios.

---

### 2. Funcionalidades

#### **Autenticación**
1. **Registro de Usuario**
   - Endpoint: `POST /auth/register`
   - Parámetros:
     ```json
     {
       "email": "user@example.com",
       "password": "securepassword"
     }
     ```
   - Validaciones:
     - El correo debe ser único y válido.
     - La contraseña debe tener al menos 6 caracteres.
   - Respuesta:
     ```json
     {
       "message": "User registered successfully"
     }
     ```

2. **Inicio de Sesión**
   - Endpoint: `POST /auth/login`
   - Parámetros:
     ```json
     {
       "email": "user@example.com",
       "password": "securepassword"
     }
     ```
   - Respuesta:
     ```json
     {
       "token": "JWT_TOKEN"
     }
     ```

#### **Gestión de Tareas**
Todos los endpoints de tareas requieren autenticación (JWT en el header).

1. **Crear Tarea**
   - Endpoint: `POST /tasks`
   - Parámetros:
     ```json
     {
       "title": "Task Title",
       "description": "Task Description"
     }
     ```
   - Validaciones:
     - El título es obligatorio.
   - Respuesta:
     ```json
     {
       "id": 1,
       "title": "Task Title",
       "description": "Task Description",
       "status": "pending",
       "userId": 1
     }
     ```

2. **Listar Tareas**
   - Endpoint: `GET /tasks`
   - Respuesta:
     ```json
     [
       {
         "id": 1,
         "title": "Task Title",
         "description": "Task Description",
         "status": "pending",
         "userId": 1
       }
     ]
     ```

3. **Actualizar Tarea**
   - Endpoint: `PUT /tasks/:id`
   - Parámetros:
     ```json
     {
       "title": "Updated Title",
       "description": "Updated Description",
       "status": "completed"
     }
     ```
   - Respuesta:
     ```json
     {
       "message": "Task updated successfully"
     }
     ```

4. **Eliminar Tarea**
   - Endpoint: `DELETE /tasks/:id`
   - Respuesta:
     ```json
     {
       "message": "Task deleted successfully"
     }
     ```

---

### 3. Consideraciones
- Implementa manejo de errores adecuado (por ejemplo, validaciones fallidas, recurso no encontrado).
- Protege rutas sensibles usando middleware para JWT.
- Asegúrate de que cada usuario solo pueda gestionar sus propias tareas.

---

## Entregables
1. Código del proyecto en en una rama independiente identificada con tu nombre, ejemplo: **brian-maya**
2. Un archivo `README2.md` que incluya:
   - Instrucciones para ejecutar el proyecto.
   - Detalles sobre las dependencias utilizadas.
   - Notas adicionales (si las hay).

---

## Evaluación
Se evaluará con base en los siguientes criterios:
1. Correctitud funcional de los endpoints.
2. Uso adecuado de las buenas prácticas en Node.js y Express.
3. Organización y claridad del código. (SOLID, PATRONES DE DISEÑO, CLEAN CODE, DRY)
4. Manejo de errores y validaciones.

---

¡Buena suerte!
