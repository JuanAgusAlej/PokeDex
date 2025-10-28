FROM node:16

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock si existe
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del proyecto
COPY . .

# Variables útiles para que CRA escuche fuera del contenedor y para que watch funcione
ENV CHOKIDAR_USEPOLLING=true
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# Comando para desarrollo
CMD ["npm", "start"]