# # Use the official Node.js 12 image as the base image
FROM node:12-alpine

# # Set the working directory to /app
WORKDIR /app/

# # Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# # Install the Node.js dependencies
RUN npm install

# # Copy the rest of the application code to the container
COPY . app/
# # Build the Angular application
RUN npm start
EXPOSE 5000:4500


# Use the official Nginx image as the base image for the production image

