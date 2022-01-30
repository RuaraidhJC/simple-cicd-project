FROM node:lts-alpine3.14

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . ./

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
