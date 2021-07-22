#Base operating System
FROM labshare/base:12-alpine

# Set the source folder
ARG NPM_TOKEN

# Create app directory
WORKDIR /var/www/app

# Bundle app source
COPY . .
# Create required folders
RUN touch lscservices.sh && \
    chmod 700 lscservices.sh && \
    echo -e '#!/bin/bash\nlsc services start' > lscservices.sh && \
    mv lscservices.sh /usr/bin/

# installing dependencies
RUN apk update && apk upgrade
RUN apk add --no-cache bash git openssh
RUN npm config set unsafe-perm true
RUN npm -g config set user root
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
RUN npm i -g @labshare/lsc
RUN npm install typescript -g
RUN npm install --no-optional
RUN npm run build
# Run the service using pm2 and the shorcut to lsc services start
# ENTRYPOINT ["pm2-docker", "lscservices.sh"] 
ENTRYPOINT [ "pm2-runtime", "start", "pm2.json" ]
EXPOSE 8000