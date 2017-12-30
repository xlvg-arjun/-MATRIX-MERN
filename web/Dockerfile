FROM node:8.9-alpine

# Get dependencies to run a shell script
RUN apk update
RUN apk add bash

RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install
RUN chmod +x /usr/src/app/entrypoint.sh

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
