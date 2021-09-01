
FROM node:12.3.1-alpine AS build
# Set the source folder
ARG SOURCE_FOLDER="./"
ARG BUILD_VERSION
ARG NPM_TOKEN
# Create app directory
WORKDIR /var/www/app
# Bundle app source
COPY ${SOURCE_FOLDER} .
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    npm config set unsafe-perm true && \
    echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc && \
    npm i -g @labshare/lsc && \
    npm i --quiet --cache=./npm-cache
RUN NODE_OPTIONS=--max_old_space_size=4096 lsc build site && \
    rm -f .npmrc
FROM labshare/docker-base-web
COPY --from=build /var/www/app/dist/thrizer-admin-app/ /var/www/app/
