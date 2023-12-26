# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-slim as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Set working directory in the build stage
WORKDIR /app

# Install node modules
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Final stage
FROM node:${NODE_VERSION}-slim as final

# Set production environment
ENV NODE_ENV="production"

# Set working directory in the final stage
WORKDIR /app

# Copy built application from the build stage
COPY --from=build /app .

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]

