# Builder container to compile typescript
FROM node:12-alpine AS build
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

# Copy the application source
COPY . .
# Build typescript
RUN npm run build



FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist/dashboard /usr/share/nginx/html



EXPOSE 80