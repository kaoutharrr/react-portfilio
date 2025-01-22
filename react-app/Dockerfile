# Use a Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code with correct ownership
COPY --chown=node:node . .

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
