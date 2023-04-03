#!/bin/bash

# Exit if something fails
set -e

# Build the base image and start the docker container for DiscordLogin
sudo DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 docker-compose up -d --build

# Checking status of the container
sudo docker ps

# Fly way
echo
echo "If everything went well, DiscordLogin should be running at http://127.0.0.1:3000"
echo "To login to the docker container, run => docker exec -it DiscordLogin bash"
echo