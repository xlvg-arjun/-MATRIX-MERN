# [M.A.T.R.I.X.] Docker Boilerplate - MERN Edition

Boilerplate for Dockerized MERN stack development.

### Features

- Dockerized MERN development setup
- Makes use of docker-compose
- Makes use of nginx as a server and reverse-proxy
- Essential webpack starting point with stylus, babel, and hot reloading enabled along with react-hot-loader v4. Configured rapid-solid development and production builds.
- No-nonsense architecture with documentation provided through README. 
- Yarn is used.
- Project makes use of eslint-config-airbnb

### How to use...

#### Developing...

1. Clone this repo and remove the .git directory. On linux this could be...
  
```bash
  cd <directory-cloned-to>
  rm -rf .git
```

2. Next, move into the 'web' directory and run the following commands...

```bash
  cd web
  yarn install
  cd frontend
  yarn install
  cd .. && cd backend
  yarn install
```
Note that yarn can be replaced with npm. 

There are certain packages that have project-level-utility (such as eslint), and so are installed into the web directory while frontend and backend code have their own dependencies. This makes for de-coupling while making use project-wide packages like those mandated by eslint-config-airbnb.

Project-wide eslint configuration may be overriden easily by modifying/creating the .eslintrc file for that directory. 

As shown here, eslint configuration in the web directory is overriden in the frontend. Any settings defined in parent directories are inherited, unless explicity overriden.

Note that the front-end and back-end have not been linked in this version.

### Dockerizing...

All you need to do is run the following commands...

```bash
  docker-compose build
  docker-compose up
```

After this, you just need to visit localhost:8080 in your browser. Nginx would be listening on port 80 of the host machine.


## Contributing

Submit a PR or fork this repository and contribute by making a modified boilerplate for MERN development. Anything will be good. Since the Project is licensed under MIT, you're free to use the code with hardly any restriction.
