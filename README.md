# Tarea 6: Mi Primera API REST con NestJS

## 📌 Descripción

Este proyecto consiste en la implementación de una **API REST** utilizando **NestJS**, aplicando la **arquitectura por capas** (Controller, Service, DTOs y Entity).  
El objetivo es demostrar la comprensión de la separación de responsabilidades y el manejo de un recurso (`Producto`) en memoria, sin base de datos.  

El proyecto incluye un **CRUD completo** con los cinco endpoints fundamentales:  
- Crear un producto  
- Listar todos los productos  
- Ver un producto por ID  
- Actualizar un producto  
- Eliminar un producto  

Se utilizó un **array en memoria** para simular la base de datos, cumpliendo con los requisitos de la tarea.

---

## 🛠 Tecnologías y Dependencias

- **Node.js** v18+  
- **NestJS** v10+  
- **TypeScript**  
- **class-validator** (para validaciones de DTOs)  
- **Postman o Insomnia** (para probar la API)  

---

## 📁 Estructura del Proyecto

```text
tarea6-api/
├─ src/
│  ├─ productos/
│  │  ├─ dto/
│  │  │  ├─ create-producto.dto.ts
│  │  │  └─ update-producto.dto.ts
│  │  ├─ entities/
│  │  │  └─ producto.entity.ts
│  │  ├─ productos.controller.ts
│  │  └─ productos.service.ts
│  └─ app.module.ts
├─ package.json
└─ README.md

Detalle de la Implementación
1️⃣ Entidad: Producto

Define la estructura de los productos con tres campos:

id: number → Identificador único

nombre: string → Nombre del producto

precio: number → Precio del producto

Archivo: src/productos/entities/producto.entity.ts

2️⃣ DTOs (Data Transfer Objects)
a) CreateProductoDto

Define los datos requeridos para crear un producto.

Validaciones:

nombre: string obligatorio

precio: número obligatorio, mínimo 0

Archivo: src/productos/dto/create-producto.dto.ts

b) UpdateProductoDto

Permite actualizar campos de manera parcial.

Extiende de CreateProductoDto usando PartialType.

Archivo: src/productos/dto/update-producto.dto.ts

3️⃣ Service: ProductosService

Maneja la lógica de negocio.

Almacena los productos en un array en memoria.

Funcionalidades:

create(dto: CreateProductoDto) → Crear un producto

findAll() → Listar todos los productos

findOne(id: number) → Buscar un producto por ID

update(id: number, dto: UpdateProductoDto) → Actualizar un producto

remove(id: number) → Eliminar un producto

Archivo: src/productos/productos.service.ts

4️⃣ Controller: ProductosController

Recibe las peticiones HTTP y llama al servicio para procesarlas.

Endpoints:

POST /productos → Crear producto

GET /productos → Listar todos

GET /productos/:id → Ver producto por ID

PATCH /productos/:id → Actualizar producto

DELETE /productos/:id → Eliminar producto

Archivo: src/productos/productos.controller.ts