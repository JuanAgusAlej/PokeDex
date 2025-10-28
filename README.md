# Pokedex App

## Objetivo

Aplicación web que muestra información de Pokemon utilizando la PokeAPI, desarrollada con React y desplegada usando Docker.

## Tecnologías utilizadas

- React 17.0.2
- Bootstrap 5.1.3
- Docker
- Docker Compose

## Prerrequisitos

- Docker
- Docker Compose

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd PokeDex
```

2. Construir y ejecutar con Docker Compose:

```bash
docker-compose up --build
```

3. Acceder a la aplicación:
   Abrir http://localhost:3000 en el navegador

## Desarrollo local sin Docker

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm start
```

## Estructura del proyecto

```
src/
  ├── components/      # Componentes React
  ├── css/            # Estilos
  ├── helpers/        # Funciones auxiliares
  ├── img/           # Imágenes
  ├── App.jsx        # Componente principal
  └── index.js       # Punto de entrada
```

## Características

- Visualización de Pokemon por generación
- Información detallada de cada Pokemon
- Interfaz responsive
- Animaciones de carga

## Comandos Docker útiles

```bash
# Construir la imagen
docker build -t pokedex-app .

# Ejecutar el contenedor
docker run -p 3000:3000 pokedex-app

# Detener los contenedores
docker-compose down
```
