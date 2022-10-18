# Fitbook App
## _Share your own recipes for everyone_

https://github.com/tolgabayra

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/tolgabayra)





Fitbook is a platform where people can register to the system and share their recipes with other people and learn great recipes in many categories.


## Tech

Dillinger uses a number of open source projects to work properly:

- ReactJS
- Chakra UI
- Redux Toolkit
- Winston Logging
- MongoDB
- Docker-Compose
- ExpressJS 
- TailwindCSS
- JsonWebToken
- Redis


## Installation
Dillinger requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.(Client)

```sh
cd client
npm install
npm run dev
```

Install the dependencies and devDependencies and start the server.(Server)

```sh
cd apiserver
npm install
create a .env file(For environment variables)
npm start(with nodemon)
```





#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 27017, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd fitbook
touch docker-compose.yml 

Here example;
'''
version: '3.9'
services:
  mongodb:
    image: mongo:latest
    restart: always
    ports:
      - 27017:27017
    volumes:
      - /mongo:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=root
 ''''
```

This will create the dillinger image and pull in the necessary dependencies.Last thing;

```sh
run docker compose up
```

And done , we are ready!


## License

MIT
