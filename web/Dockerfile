FROM node:8.9-alpine

# Get dependencies to run a shell script
RUN apk update
RUN apk add bash curl rsync

RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install
# The --production=false setting is set to install webpack and related dev-dependencies to build for production.
RUN cd frontend && yarn install --production=false
RUN cd backend && yarn install
RUN chmod +x /usr/src/app/entrypoint.sh

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
