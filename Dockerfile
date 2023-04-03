# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy install files
COPY package*.json /usr/src

# install dependencies
RUN npm install

# copy source files
COPY . /usr/src

# build
RUN npm run build

# start app
EXPOSE 3000
CMD npm run start